import { createContext, useState, useEffect, useRef } from 'react';
import { jwtDecode } from 'jwt-decode';
import api from '../api/axios';

/* ───────────────────────────── CONSTANTS ───────────────────────────── */
const AuthContext = createContext();
const TOKEN_KEY = 'token';                      // Access token storage key
const storage = sessionStorage;                 // Session-based storage
const INACTIVITY_TIMEOUT = 30 * 60 * 1000;      // 30 minutes in ms

/* ───────────────────────────── HELPER FNS ──────────────────────────── */
const isTokenExpired = (token) => {
  try {
    const { exp } = jwtDecode(token);
    return exp * 1000 < Date.now();
  } catch {
    return true;
  }
};

/* ───────────────────────────── PROVIDER ────────────────────────────── */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const idleTimerRef = useRef(null); // Ref for the inactivity timeout

  /* ──────────────────── IDLE-LOGOUT HANDLING ──────────────────── */
  const clearIdleTimer = () => {
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
      idleTimerRef.current = null;
    }
  };

  const startIdleTimer = () => {
    clearIdleTimer();
    if (!user) return;

    idleTimerRef.current = setTimeout(() => {
      console.log('Logging out due to inactivity');
      logout();
      window.location.href = '/login';
    }, INACTIVITY_TIMEOUT);
  };

  const resetIdleTimer = () => {
    startIdleTimer();
  };

  useEffect(() => {
    if (!user) {
      clearIdleTimer();
      return;
    }

    const events = [
      'mousedown',
      'keydown',
      'scroll',
      'touchstart',
      'mousemove',
      'wheel',
      'touchmove',
    ];

    events.forEach((e) => window.addEventListener(e, resetIdleTimer));
    startIdleTimer(); // Start on mount

    return () => {
      events.forEach((e) => window.removeEventListener(e, resetIdleTimer));
      clearIdleTimer();
    };
  }, [user]);

  /* ──────────────────── TOKEN REFRESH ──────────────────── */
  const refreshToken = async () => {
    try {
      const { data } = await api.post('/auth/refresh-token'); // withCredentials sends the cookie

      // Store the new access token
      storage.setItem(TOKEN_KEY, data.token);
      api.defaults.headers.common.Authorization = `Bearer ${data.token}`;

      const decoded = jwtDecode(data.token);
      setUser({
        id: decoded.id,
        first_name: decoded.first_name,
        last_name: decoded.last_name,
        email: decoded.email,
        is_admin: decoded.is_admin,
      });
      startIdleTimer();
      return data.token;
    } catch (err) {
      console.error('Token refresh failed', err);
      logout();
      return null;
    }
  };

  /* ──────────────────── INITIAL TOKEN CHECK ──────────────────── */
  useEffect(() => {
    const init = async () => {
      const token = storage.getItem(TOKEN_KEY);
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        if (isTokenExpired(token)) {
          const newToken = await refreshToken();
          if (!newToken) throw new Error('Token refresh failed');
        } else {
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          const decoded = jwtDecode(token);
          setUser({
            id: decoded.id,
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email,
            is_admin: decoded.is_admin,
          });
          startIdleTimer();
        }
      } catch (err) {
        console.warn('Token invalid or expired', err);
        storage.removeItem(TOKEN_KEY);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  /* ──────────────────── LOGIN / LOGOUT ──────────────────── */
  const login = async (email, password) => {
    try {
      const res = await api.post('/auth/login', { email, password });
      const token = res.data.token;

      storage.setItem(TOKEN_KEY, token);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      const decoded = jwtDecode(token);
      setUser({
        id: decoded.id,
        first_name: decoded.first_name,
        last_name: decoded.last_name,
        email: decoded.email,
        is_admin: decoded.is_admin,
      });
      startIdleTimer();

      return { success: true, user: decoded };
    } catch (err) {
      console.error('Login error', err);
      return { success: false, message: err.response?.data?.message || 'Login failed' };
    }
  };

  const logout = () => {
    clearIdleTimer();
    storage.removeItem(TOKEN_KEY);
    delete api.defaults.headers.common.Authorization;
    setUser(null);
  };

  /* ──────────────────── AXIOS 401 INTERCEPTOR ──────────────────── */
  useEffect(() => {
    const id = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          const newToken = await refreshToken();
          if (newToken) {
            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return api(originalRequest);
          }
        }
        return Promise.reject(error);
      }
    );

    return () => api.interceptors.response.eject(id);
  }, []);

  /* ──────────────────── PROVIDE CONTEXT ──────────────────── */
  return (
    <AuthContext.Provider value={{ user, login, logout, refreshToken }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
