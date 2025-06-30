import { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api/axios';
import AuthContext from '../context/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';
import PageTransition from '../components/PageTransition';
import { Eye, EyeOff } from 'lucide-react';

function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [resendSuccess, setResendSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resendStatus, setResendStatus] = useState(''); // '', 'resending', 'sent', 'error'
  const [secondsLeft, setSecondsLeft] = useState(() => {
    const timestamp = localStorage.getItem('login_verification_last_sent');
    if (timestamp) {
      const elapsed = Math.floor((Date.now() - parseInt(timestamp, 10)) / 1000);
      return Math.max(60 - elapsed, 0);
    }
    return 0;
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (secondsLeft > 0) {
      const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [secondsLeft]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResendSuccess('');
    setIsSubmitting(true);

    try {
      const result = await login(email, password);
      if (result.success) {
        navigate(result.user.is_admin ? '/admin' : '/dashboard');
      } else {
        setError(result.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendVerification = async () => {
    setResendStatus('resending');
    setError('');
    setResendSuccess('');
    try {
      await api.post('/auth/resend-verification', { email });
      localStorage.setItem('login_verification_last_sent', Date.now().toString());
      setResendStatus('sent');
      setSecondsLeft(60);
      setResendSuccess('Verification email resent! Please check your inbox.');
    } catch (err) {
      setResendStatus('error');
      setError(err.response?.data?.message || 'Failed to resend verification email.');
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-sm w-full bg-white rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900">Welcome Back</h2>
              <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
            </div>

            <div className="space-y-4">
      <input
        type="email"
                name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
            disabled={isSubmitting}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out text-gray-900 text-sm placeholder-gray-400"
      />

              <div className="relative">
      <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
            disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out text-gray-900 text-sm placeholder-gray-400 pr-12"
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

            {error && (
              <div className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-lg">
                {error}
                {error.includes('verify your email') && (
                  <div className="mt-2">
                  <button
                    type="button"
                    onClick={handleResendVerification}
                      className="ml-1 text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed border border-blue-200 rounded px-2 py-1"
                      disabled={resendStatus === 'resending' || secondsLeft > 0}
                    >
                      {resendStatus === 'resending' ? (
                        <>
                          <LoadingSpinner size="small" light={false} />
                          <span>Sending...</span>
                        </>
                      ) : secondsLeft > 0 ? (
                        <span>Resend verification email ({secondsLeft}s)</span>
                      ) : (
                        'Resend verification email'
                      )}
                  </button>
                    {resendStatus === 'sent' && (
                      <p className="success-notification text-xs mt-1">
                        Verification email has been sent successfully.
                      </p>
                    )}
                    {resendStatus === 'error' && (
                      <p className="error-notification text-xs mt-1">
                        Failed to resend verification email.
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}

            {resendSuccess && (
              <div className="text-sm text-green-600 bg-green-50 px-4 py-3 rounded-lg">
                {resendSuccess}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-none text-sm font-medium text-white transition-all duration-150 ease-in-out
                ${isSubmitting 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'}`}
            >
          {isSubmitting ? (
                <>
              <LoadingSpinner size="small" light={true} />
              <span className="ml-2">Signing in...</span>
                </>
          ) : (
            'Sign In'
          )}
      </button>

            <div className="space-y-4 text-center text-sm">
              <Link 
                to="/forgot-password" 
                className="block text-blue-600 hover:text-blue-700 transition-colors duration-150"
              >
                Forgot your password?
              </Link>
              <div className="text-gray-600">
                Don't have an account?{' '}
                <Link 
                  to="/register" 
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-150"
                >
                  Sign up
                </Link>
          </div>
      </div>
    </form>
        </div>
      </div>
    </PageTransition>
  );
}

export default Login;
