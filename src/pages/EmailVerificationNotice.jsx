import { useState, useEffect } from 'react';
import api from '../api/axios';
import PageTransition from '../components/PageTransition';

function EmailVerificationNotice({ email }) {
  const [message, setMessage] = useState('');
  const [cooldown, setCooldown] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleResend = async () => {
    setLoading(true);
    setMessage('');
    try {
      await api.post('/auth/resend-verification', { email });
      setMessage('Verification email sent successfully');
      setCooldown(60);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to resend verification email.');
    } finally {
      setLoading(false);
    }
  };

  // Countdown logic
  useEffect(() => {
    if (cooldown === 0) return;
  
    const timer = setTimeout(() => {
      setCooldown(prev => prev - 1);
    }, 1000);
  
    return () => clearTimeout(timer);
  }, [cooldown]);
  

  return (
    <PageTransition>
      <div className="registration-success">
        <div className="success-container">
          <h2>Registration Successful</h2>
          <div className="success-message">
            <p>
              Thank you for registering with nxt_up. We've sent a verification email to:
              <br />
              <strong>{email}</strong>
            </p>
            <p>
              Please check your inbox and click the verification link to complete your registration.
              If you don't see the email, please check your spam folder.
            </p>
          </div>

          <div className="resend-section">
            <p>Haven't received the verification email?</p>
            <button 
              className="resend-button"
              onClick={handleResend} 
              disabled={cooldown > 0 || loading}
            >
              {loading ? 'Sending...' : 
               cooldown > 0 ? `Request new email in ${cooldown}s` : 
               'Request New Verification Email'}
      </button>

            {message && (
              <p className={message.includes('success') ? 'success-notification' : 'error-notification'}>
                {message}
              </p>
            )}
          </div>

          <div className="help-section">
            <p>
              Entered the wrong email? <a href="/register" className="text-link">Register with a different email</a>
            </p>
          </div>
        </div>
    </div>
    </PageTransition>
  );
}

export default EmailVerificationNotice;
