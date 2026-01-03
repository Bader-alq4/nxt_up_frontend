import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { Eye, EyeOff } from 'lucide-react';
// Replace your old CSS import with the shared errors.css:
import '../css_files/Errors.css';

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // page-level banner
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' | 'error' | ''

  // field-level errors + touched
  const [errors, setErrors] = useState({ password: '', confirmPassword: '' });
  const [touched, setTouched] = useState({ password: false, confirmPassword: false });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validatePassword = (pwd) => {
    const requirements = {
      minLength: pwd.length >= 12,
      hasUpper: /[A-Z]/.test(pwd),
      hasLower: /[a-z]/.test(pwd),
      hasNumber: /\d/.test(pwd),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
    };

    const messages = [];
    if (!requirements.minLength) messages.push('be at least 12 characters long');
    if (!requirements.hasUpper) messages.push('include an uppercase letter');
    if (!requirements.hasLower) messages.push('include a lowercase letter');
    if (!requirements.hasNumber) messages.push('include a number');
    if (!requirements.hasSpecial) messages.push('include a special character');

    return {
      isValid: Object.values(requirements).every(Boolean),
      message: messages.length ? `Password must ${messages.join(', ')}.` : '',
    };
  };

  const validateFields = (pwd, confirm) => {
    const newErr = { password: '', confirmPassword: '' };
    const pwCheck = validatePassword(pwd);
    if (!pwCheck.isValid) newErr.password = pwCheck.message;

    if (!confirm) {
      newErr.confirmPassword = 'Please confirm your password.';
    } else if (pwd !== confirm) {
      newErr.confirmPassword = 'Passwords do not match.';
    }
    return newErr;
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    const v = validateFields(password, confirmPassword);
    setErrors(v);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');

    // run validation
    const v = validateFields(password, confirmPassword);
    setErrors(v);
    setTouched({ password: true, confirmPassword: true });

    if (v.password || v.confirmPassword) {
      setMessage('Please correct the highlighted fields above.');
      setMessageType('error');
      // scroll to first error
      const first =
        v.password ? 'password' :
        v.confirmPassword ? 'confirmPassword' : null;
      if (first) {
        const el = document.getElementById(first);
        if (el && typeof el.scrollIntoView === 'function') {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.focus({ preventScroll: true });
        }
      }
      return;
    }

    try {
      await api.post(`/auth/reset-password/${token}`, { password });
      setMessage('Password reset successfully! Redirecting to login...');
      setMessageType('success');
      setTimeout(() => navigate('/login'), 2500);
    } catch (err) {
      // 1) server-side array of errors
      if (err.response?.data?.errors?.length) {
        setMessage(err.response.data.errors[0].msg);
      }
      // 2) top-level message
      else if (err.response?.data?.message) {
        setMessage(err.response.data.message);
      }
      // 3) fallback
      else {
        setMessage('Reset failed. Link may be expired or invalid.');
      }
      setMessageType('error');
    }
  };

  const showErr = (name) => !!(touched[name] && errors[name]);

  return (
    // Keeping your Tailwind layout; inputs/errors are CSS-driven
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="forgot-password text-2xl font-semibold text-gray-900 mb-6">
          Set a New Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* New Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <div className="password-wrapper">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter new password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (touched.password) {
                    const v = validateFields(e.target.value, confirmPassword);
                    setErrors(v);
                  }
                }}
                onBlur={handleBlur}
                required
                aria-invalid={showErr('password') ? 'true' : 'false'}
                aria-describedby={showErr('password') ? 'password-error' : undefined}
                className={`input ${showErr('password') ? 'input--error' : ''}`}
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
            {showErr('password') && (
              <p id="password-error" role="alert" className="error-text">
                {errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="password-wrapper">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (touched.confirmPassword) {
                    const v = validateFields(password, e.target.value);
                    setErrors(v);
                  }
                }}
                onBlur={handleBlur}
                required
                aria-invalid={showErr('confirmPassword') ? 'true' : 'false'}
                aria-describedby={showErr('confirmPassword') ? 'confirmPassword-error' : undefined}
                className={`input ${showErr('confirmPassword') ? 'input--error' : ''}`}
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
            {showErr('confirmPassword') && (
              <p id="confirmPassword-error" role="alert" className="error-text">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Page-level banner */}
          {message && (
            <div
              role="alert"
              className={messageType === 'success' ? 'success-summary' : 'error-summary'}
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
