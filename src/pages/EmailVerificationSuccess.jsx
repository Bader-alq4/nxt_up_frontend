import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import '../css_files/EmailVerificationSuccess.css'; // Import the CSS file

const EmailVerificationSuccess = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    logout();
  }, [logout]);

  return (
    <div className="email-verify-container">
      <div className="email-verify-card">
        <h2>Email Verified Successfully!</h2>
        <p>Your email has been confirmed. You can now log in to your account.</p>
        <button onClick={() => navigate('/login')}>Continue to Login</button>
      </div>
    </div>
  );
};

export default EmailVerificationSuccess;
