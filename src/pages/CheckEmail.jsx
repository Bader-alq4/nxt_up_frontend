import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

function CheckEmail() {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || '');
  const [status, setStatus] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(() => {
    // On mount, check if there's a saved timestamp
    const timestamp = localStorage.getItem('verification_last_sent');
    if (timestamp) {
      const elapsed = Math.floor((Date.now() - parseInt(timestamp, 10)) / 1000);
      return Math.max(60 - elapsed, 0);
    }
    return 0;
  });

  useEffect(() => {
    localStorage.removeItem('registeredEmail'); // Remove old registration email if needed
  }, []);

  const resendVerification = async () => {
    setStatus('resending');
    try {
      const res = await fetch('http://localhost:5000/api/auth/resend-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) {
        setStatus(`error:${data.message}`);
        return;
      }

      // Save timestamp so the timer persists
      localStorage.setItem('verification_last_sent', Date.now().toString());
      setStatus('sent');
      setSecondsLeft(60); // reset timer to 60s
    } catch (err) {
      console.error('Resend error:', err);
      setStatus('error:Server error. Please try again.');
    }
  };

  useEffect(() => {
    if (secondsLeft > 0) {
      const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [secondsLeft]);

  return (
    <PageTransition>
      <div className="registration-success">
        <div className="success-container">
          <h2>Registration Successful</h2>
          <div className="success-message">
            <p>
              Thank you for registering with Next Up. We've sent a verification email to:
              <br />
              <strong>{email}</strong>
            </p>
            <p>
              Please check your inbox and click the verification link to complete your registration.
              If you don't see the email, please check your spam folder.
            </p>
          </div>

          <div className="resend-section">
            {secondsLeft > 0 ? (
              <p className="cooldown-message">
                You can request another verification email in {secondsLeft} seconds.
              </p>
            ) : (
              <button
                className="resend-button"
                onClick={resendVerification}
                disabled={status === 'resending'}
              >
                {status === 'resending' ? 'Sending...' : 'Resend Verification Email'}
              </button>
            )}

            {status === 'sent' && (
              <p className="success-notification">
                Verification email has been sent successfully.
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
              <a href="/register" className="text-link">Register with a different email</a>
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default CheckEmail;
