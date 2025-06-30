import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { Eye, EyeOff } from 'lucide-react';
import '../css_stuff/ForgotPassword.css';

function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const requirements = {
      minLength: password.length >= 12,
      hasUpper: /[A-Z]/.test(password),
      hasLower: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };

    const messages = [];
    if (!requirements.minLength) messages.push('be at least 12 characters long');
    if (!requirements.hasUpper) messages.push('include an uppercase letter');
    if (!requirements.hasLower) messages.push('include a lowercase letter');
    if (!requirements.hasNumber) messages.push('include a number');
    if (!requirements.hasSpecial) messages.push('include a special character');

    return {
      isValid: Object.values(requirements).every(Boolean),
      message: messages.length ? `Password must ${messages.join(', ')}.` : ''
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    // Validate passwords match
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      setMessageType('error');
      return;
    }

    // Validate password strength
    const validation = validatePassword(password);
    if (!validation.isValid) {
      setMessage(validation.message);
      setMessageType('error');
      return;
    }

    try {
      await api.post(`/auth/reset-password/${token}`, { password });
      setMessage('Password reset successfully! Redirecting to login...');
      setMessageType('success');
      setTimeout(() => navigate('/login'), 2500);
    } catch (err) {
      // 1) If server returned validation errors array, show the first one
      if (err.response?.data?.errors) {
        const firstError = err.response.data.errors[0];
        setMessage(firstError.msg);
      }
      // 2) Otherwise if there's a top-level "message" field
      else if (err.response?.data?.message) {
        setMessage(err.response.data.message);
      }
      // 3) Fallback
      else {
        setMessage('Reset failed. Link may be expired or invalid.');
      }
      setMessageType('error');
    }    
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="forgot-password">
          Set a New Password
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <div className="relative">
      <input
              id="password"
                type={showPassword ? 'text' : 'password'}
              placeholder="Enter new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 pr-12"
      />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="password-eye-btn"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
            <input
              id="confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 pr-12"
            />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((v) => !v)}
                className="password-eye-btn"
                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                tabIndex={-1}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
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
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Reset Password
          </button>
    </form>
      </div>
    </div>
  );
}

export default ResetPassword;
