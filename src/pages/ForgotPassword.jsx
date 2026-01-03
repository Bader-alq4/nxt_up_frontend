import { useState, useEffect } from 'react';
import api from '../api/axios';
import '../css_files/ForgotPassword.css';
import LoadingSpinner from '../components/LoadingSpinner';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [cooldown, setCooldown] = useState(() => {
    const savedCooldown = localStorage.getItem('forgotPasswordCooldown');
    const savedTimestamp = localStorage.getItem('forgotPasswordTimestamp');
    if (savedCooldown && savedTimestamp) {
      const timeLeft = Math.max(0, Math.ceil((parseInt(savedTimestamp) + 60000 - Date.now()) / 1000));
      return timeLeft;
    }
    return 0;
  });
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => {
        setCooldown(c => {
          const newCooldown = c - 1;
          if (newCooldown === 0) {
            localStorage.removeItem('forgotPasswordCooldown');
            localStorage.removeItem('forgotPasswordTimestamp');
          }
          return newCooldown;
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (cooldown > 0) {
      setMessage(`Please wait ${cooldown} seconds before requesting another reset link.`);
      setMessageType('error');
      return;
    }

    setMessage('');
    setIsLoading(true);
    try {
      await api.post('/auth/forgot-password', { email: email.trim() });
      setMessage('Reset link sent! If this email is associated with an account, you will receive a reset link in your email.');
      setMessageType('success');
      setCooldown(60);
      localStorage.setItem('forgotPasswordCooldown', '60');
      localStorage.setItem('forgotPasswordTimestamp', Date.now().toString());
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error sending reset email.');
      setMessageType('error');
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="forgot-password">
          Forgot Password
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setMessage('');
              }}
              required
              autoFocus
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {message && (
            <div className={`p-3 rounded-md ${
              messageType === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
            }`}>
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={cooldown > 0 || !email.trim() || isLoading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-none shadow-sm text-sm font-medium text-white 
              ${cooldown > 0 || !email.trim()
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {isLoading ? (
              <LoadingSpinner size="small" light />
            ) : cooldown > 0 ? (
              `Try again in ${cooldown}s`
            ) : (
              'Send Reset Link'
            )}
          </button>

        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
