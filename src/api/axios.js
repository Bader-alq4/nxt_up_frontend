// src/api/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  withCredentials: true,
});

// Attach access token to every request
api.interceptors.request.use(config => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auto-refresh on 401 and retry original request
api.interceptors.response.use(
  res => res,
  async error => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await api.get('/auth/refresh-token');
        const newToken = res.data.token;

        sessionStorage.setItem('token', newToken);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (err) {
        console.error('Token refresh failed', err);
        sessionStorage.removeItem('token');
        window.location.href = '/login';
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default api;