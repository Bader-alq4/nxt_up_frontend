import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import api from '../api/axios';
import LoadingSpinner from '../components/LoadingSpinner';
import PageTransition from '../components/PageTransition';
import '../css_stuff/Errors.css';

function Register() {
  const navigate = useNavigate();

  /* ───────────────────────── STATE ───────────────────────── */
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: '',
    date_of_birth: '',
    emergency_contact_name: '',
    emergency_contact_phone: '',
    emergency_contact_relationship: '',
    emergency_contact_email: '',
    parent_consent: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUnder18, setIsUnder18] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formSummaryError, setFormSummaryError] = useState('');

  /* ──────────────────── AGE-CALC HELPER ──────────────────── */
  const getAge = (isoDate) => {
    const today = new Date();
    const dob   = new Date(`${isoDate}T00:00:00`);
    let age     = today.getFullYear() - dob.getFullYear();
    const m     = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
    return age;
  };

  /* ─────────────── DOB EFFECT ─────────────── */
  useEffect(() => {
    if (!form.date_of_birth) return;
    const under = getAge(form.date_of_birth) < 18;
    setIsUnder18(under);
    if (!under && form.parent_consent) {
      setForm(prev => ({ ...prev, parent_consent: false }));
    }
  }, [form.date_of_birth]);

  /* ────────────── FIELD VALIDATOR ───────────────── */
  const validateField = (name, value) => {
    switch (name) {
      case 'first_name':
        if (!value.trim()) return 'First name is required.';
        return '';
      case 'last_name':
        if (!value.trim()) return 'Last name is required.';
        return '';
      case 'email':
        if (!value) return 'Email is required.';
        if (!/^\S+@\S+\.\S+$/.test(value)) return 'Invalid email format.';
        return '';
      case 'password': {
        if (!value) return 'Password is required.';
        const msgs = [];
        if (value.length < 8) msgs.push('at least 8 characters');
        if (!/[A-Z]/.test(value))   msgs.push('an uppercase letter');
        if (!/[a-z]/.test(value))   msgs.push('a lowercase letter');
        if (!/\d/.test(value))      msgs.push('a number');
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) msgs.push('a special character');
        return msgs.length ? `Password must include ${msgs.join(', ')}.` : '';
      }
      case 'date_of_birth':
        if (!value) return 'Date of birth is required.';
        return '';
      case 'phone_number':
        if (!value) return 'Phone number is required.';
        if (!/^1?\d{10}$/.test(value.replace(/\D/g, '')))
          return 'Invalid Canadian phone number.';
        return '';
      case 'emergency_contact_name':
        if (!value.trim()) return 'Contact name is required.';
        return '';
      case 'emergency_contact_phone':
        if (!value) return 'Contact phone is required.';
        if (!/^1?\d{10}$/.test(value.replace(/\D/g, '')))
          return 'Invalid Canadian phone number.';
        return '';
      case 'emergency_contact_email':
        if (!value) return 'Contact email is required.';
        if (!/^\S+@\S+\.\S+$/.test(value))
          return 'Invalid email format.';
        return '';
      case 'emergency_contact_relationship':
        if (!value) return 'Relationship is required.';
        return '';
      default:
        return '';
    }
  };

  /* small helper: should we show the error for this field? */
  const showErr = (name) => !!(touched[name] && errors[name]);

  /* ──────────────────── HANDLERS ────────────────────────── */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // clear that field's error
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const err = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: err }));
  };

  const validateForm = () => {
    const newErr = {};
    Object.keys(form).forEach((key) => {
      if (key === 'parent_consent') return; // checked separately
      const err = validateField(key, form[key]);
      if (err) newErr[key] = err;
    });
    if (isUnder18 && !form.parent_consent) {
      newErr.parent_consent = 'Parent/guardian consent is required.';
    }
    return newErr;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErr = validateForm();

    if (Object.keys(formErr).length) {
      setErrors(formErr);
      const allTouched = {};
      Object.keys(form).forEach(k => { allTouched[k] = true; });
      setTouched(allTouched);

      setFormSummaryError('Please correct the highlighted fields above.');

      // Scroll to first errored field
      const firstKey = Object.keys(formErr)[0];
      const el = document.querySelector(`[name="${firstKey}"]`);
      if (el && typeof el.scrollIntoView === 'function') {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.focus({ preventScroll: true });
      }
      return;
    }

    setFormSummaryError('');

    setIsSubmitting(true);
    try {
      await api.post('/auth/register', form);
      navigate('/check-email', { state: { email: form.email } });
    } catch (err) {
      const msg = err.response?.data?.message;
      setErrors({ form: msg || 'Registration failed.' });
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      {/* You can keep your layout/utility classes for structure/spacing */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Create Your Account</h2>

        {/* First & Last */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              name="first_name"
              placeholder="First Name"
              value={form.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              aria-invalid={showErr('first_name') ? 'true' : 'false'}
              aria-describedby={showErr('first_name') ? 'first_name-error' : undefined}
              className={`input ${showErr('first_name') ? 'input--error' : ''}`}
            />
            {showErr('first_name') && (
              <p id="first_name-error" role="alert" className="error-text">{errors.first_name}</p>
            )}
          </div>
          <div>
            <input
              name="last_name"
              placeholder="Last Name"
              value={form.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isSubmitting}
              aria-invalid={showErr('last_name') ? 'true' : 'false'}
              aria-describedby={showErr('last_name') ? 'last_name-error' : undefined}
              className={`input ${showErr('last_name') ? 'input--error' : ''}`}
            />
            {showErr('last_name') && (
              <p id="last_name-error" role="alert" className="error-text">{errors.last_name}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            aria-invalid={showErr('email') ? 'true' : 'false'}
            aria-describedby={showErr('email') ? 'email-error' : undefined}
            className={`input ${showErr('email') ? 'input--error' : ''}`}
          />
          {showErr('email') && (
            <p id="email-error" role="alert" className="error-text">{errors.email}</p>
          )}
        </div>

        {/* Password with toggle */}
        <div className="password-wrapper">
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Create a Password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            aria-invalid={showErr('password') ? 'true' : 'false'}
            aria-describedby={showErr('password') ? 'password-error' : undefined}
            className={`input ${showErr('password') ? 'input--error' : ''}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="password-eye-btn"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

          {showErr('password') && (
            <p id="password-error" role="alert" className="error-text">
              {errors.password}
            </p>
          )}
        </div>

      {/* Date of Birth */}
      <div>
        <label htmlFor="date_of_birth" className="block text-sm font-medium text-gray-700 mb-1">
          Date of Birth
        </label>
        <input
          id="date_of_birth"
          name="date_of_birth"
          type="date"
          value={form.date_of_birth}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={isSubmitting}
          aria-invalid={showErr('date_of_birth') ? 'true' : 'false'}
          aria-describedby={showErr('date_of_birth') ? 'date_of_birth-error' : undefined}
          className={`input ${showErr('date_of_birth') ? 'input--error' : ''}`}
          max={new Date().toISOString().split('T')[0]} // prevent future dates
        />
        {showErr('date_of_birth') && (
          <p id="date_of_birth-error" role="alert" className="error-text">
            {errors.date_of_birth}
          </p>
        )}
      </div>
        {/* Phone */}
        <div>
          <input
            name="phone_number"
            placeholder="Phone Number"
            value={form.phone_number}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            aria-invalid={showErr('phone_number') ? 'true' : 'false'}
            aria-describedby={showErr('phone_number') ? 'phone_number-error' : undefined}
            className={`input ${showErr('phone_number') ? 'input--error' : ''}`}
          />
          {showErr('phone_number') && (
            <p id="phone_number-error" role="alert" className="error-text">{errors.phone_number}</p>
          )}
        </div>

        <h3 className="text-lg font-medium text-gray-700 mt-4">Emergency Contact</h3>

        {/* Emergency Name */}
        <div>
          <input
            name="emergency_contact_name"
            placeholder="Contact Name"
            value={form.emergency_contact_name}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            aria-invalid={showErr('emergency_contact_name') ? 'true' : 'false'}
            aria-describedby={showErr('emergency_contact_name') ? 'emergency_contact_name-error' : undefined}
            className={`input ${showErr('emergency_contact_name') ? 'input--error' : ''}`}
          />
          {showErr('emergency_contact_name') && (
            <p id="emergency_contact_name-error" role="alert" className="error-text">{errors.emergency_contact_name}</p>
          )}
        </div>

        {/* Emergency Phone */}
        <div>
          <input
            name="emergency_contact_phone"
            placeholder="Contact Phone"
            value={form.emergency_contact_phone}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            aria-invalid={showErr('emergency_contact_phone') ? 'true' : 'false'}
            aria-describedby={showErr('emergency_contact_phone') ? 'emergency_contact_phone-error' : undefined}
            className={`input ${showErr('emergency_contact_phone') ? 'input--error' : ''}`}
          />
          {showErr('emergency_contact_phone') && (
            <p id="emergency_contact_phone-error" role="alert" className="error-text">{errors.emergency_contact_phone}</p>
          )}
        </div>

        {/* Emergency Email */}
        <div>
          <input
            name="emergency_contact_email"
            type="email"
            placeholder="Contact Email"
            value={form.emergency_contact_email}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            aria-invalid={showErr('emergency_contact_email') ? 'true' : 'false'}
            aria-describedby={showErr('emergency_contact_email') ? 'emergency_contact_email-error' : undefined}
            className={`input ${showErr('emergency_contact_email') ? 'input--error' : ''}`}
            required
          />
          {showErr('emergency_contact_email') && (
            <p id="emergency_contact_email-error" role="alert" className="error-text">{errors.emergency_contact_email}</p>
          )}
        </div>

        {/* Emergency Relationship */}
        <div>
          <select
            name="emergency_contact_relationship"
            value={form.emergency_contact_relationship}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            aria-invalid={showErr('emergency_contact_relationship') ? 'true' : 'false'}
            aria-describedby={showErr('emergency_contact_relationship') ? 'emergency_contact_relationship-error' : undefined}
            className={`input ${showErr('emergency_contact_relationship') ? 'input--error' : ''}`}
          >
            <option value="">Relationship</option>
            <option value="parent">Parent</option>
            <option value="guardian">Legal Guardian</option>
            <option value="other_family">Family Member</option>
            <option value="other">Other</option>
          </select>
          {showErr('emergency_contact_relationship') && (
            <p id="emergency_contact_relationship-error" role="alert" className="error-text">{errors.emergency_contact_relationship}</p>
          )}
        </div>

        {/* Parent Consent */}
        {isUnder18 && (
          <div className="consent-checkbox">
            <input
              type="checkbox"
              name="parent_consent"
              id="parent_consent"
              checked={form.parent_consent}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              aria-invalid={showErr('parent_consent') ? 'true' : 'false'}
              aria-describedby={showErr('parent_consent') ? 'parent_consent-error' : undefined}
            />
            <label htmlFor="parent_consent">
              I confirm that I am a parent/legal guardian and I give consent for this registration
            </label>
          </div>
        )}
        {touched.parent_consent && errors.parent_consent && (
          <p id="parent_consent-error" role="alert" className="error-text">{errors.parent_consent}</p>
        )}

        {/* Form-level error */}
        {errors.form && (
          <div role="alert" className="error-summary">{errors.form}</div>
        )}

        {/* Privacy policy (you can keep Tailwind for layout/typography if you want) */}
        <p className="text-xs text-gray-500">
          By creating an account, you agree to our{' '}
          <Link to="/privacy" className="underline">Privacy Policy</Link> and{' '}
          <Link to="/terms" className="underline">Terms & Conditions</Link>.
        </p>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 bg-blue-600 text-white rounded-none hover:bg-blue-700 transition flex justify-center"
        >
          {isSubmitting ? (
            <>
              <LoadingSpinner size="small" light />
              <span className="ml-2">Creating Account...</span>
            </>
          ) : (
            'Create Account'
          )}
        </button>

        {formSummaryError && (
          <div role="alert" className="error-summary">{formSummaryError}</div>
        )}

        <p className="text-sm text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 underline">Sign in</Link>
        </p>
      </form>
    </PageTransition>
  );
}

export default Register;
