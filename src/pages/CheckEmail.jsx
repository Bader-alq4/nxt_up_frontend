// src/pages/CheckEmail.jsx

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import api from '../api/axios'; // ← use your shared Axios client

function CheckEmail() {
  const location = useLocation();
  const [email] = useState(location.state?.email || '');
  const [status, setStatus] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(() => {
    // Restore cooldown timer if previously set
    const ts = localStorage.getItem('verification_last_sent');
    if (ts) {
      const elapsed = Math.floor((Date.now() - parseInt(ts, 10)) / 1000);
      return Math.max(60 - elapsed, 0);
    }
    return 0;
  });

  useEffect(() => {
    // Clean up any registration flag
    localStorage.removeItem('registeredEmail');
  }, []);

  const resendVerification = async () => {
    setStatus('resending');
    try {
      const { data } = await api.post('/auth/resend-verification', { email });

      // If your API signals failure with `success: false`
      if (data.success === false) {
        setStatus(`error:${data.message}`);
        return;
      }

      // Start cooldown
      localStorage.setItem('verification_last_sent', Date.now().toString());
      setStatus('sent');
      setSecondsLeft(60);
    } catch (err) {
      console.error('Resend error:', err);
      const msg = err.response?.data?.message || 'Server error. Please try again.';
      setStatus(`error:${msg}`);
    }
  };

  useEffect(() => {
    if (secondsLeft > 0) {
      const timer = setTimeout(() => setSecondsLeft(s => s - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [secondsLeft]);

  return (
    <PageTransition>
      <div className="registration-success">
        <div className="success-container">
          <h2>Registration Successful</h2>
          <p>
            A verification email has been sent to <strong>{email}</strong>.
            Please check your inbox to complete your registration.
          </p>

          <div className="resend-section">
            {secondsLeft > 0 ? (
              <p className="cooldown-message">
                You can resend another verification email in {secondsLeft} seconds.
              </p>
            ) : (
              <button
                className="resend-button"
                onClick={resendVerification}
                disabled={status === 'resending'}
              >
                {status === 'resending' ? 'Sending…' : 'Resend Verification Email'}
              </button>
            )}

            {status === 'sent' && (
              <p className="success-notification">
                Verification email sent successfully!
              </p>
            )}
            {status.startsWith('error:') && (
              <p className="error-notification">
                {status.replace('error:', '')}
              </p>
            )}
          </div>

          <div className="help-section">
            <p>
              Entered the wrong email?{' '}
              <a href="/register" className="text-link">
                Register with a different email
              </a>
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default CheckEmail;
