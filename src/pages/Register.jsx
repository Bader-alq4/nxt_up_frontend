import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import api from '../api/axios';
import LoadingSpinner from '../components/LoadingSpinner';
import PageTransition from '../components/PageTransition';

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
        if (value.length < 12) msgs.push('at least 12 characters');
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
      // skip parent_consent here; check it below
      if (key === 'parent_consent') return;
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
    
      // Show general error below the Create Account button
      setFormSummaryError('Please correct the highlighted fields above.');
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
              className="w-full border p-2 rounded"
            />
            {touched.first_name && errors.first_name && (
              <p className="text-red-600 text-sm">{errors.first_name}</p>
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
              className="w-full border p-2 rounded"
            />
            {touched.last_name && errors.last_name && (
              <p className="text-red-600 text-sm">{errors.last_name}</p>
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
            className="w-full border p-2 rounded"
          />
          {touched.email && errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Password with toggle */}
        <div className="relative">
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Create a Password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}               // ← this line
            disabled={isSubmitting}
            className="w-full border p-2 rounded pr-12"
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
          {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
        </div>

        {/* Date of Birth */}
        <div>
          <input
            name="date_of_birth"
            type="date"
            placeholder="Date of Birth"
            value={form.date_of_birth}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            className="w-full border p-2 rounded"
          />
          {touched.date_of_birth && errors.date_of_birth && (
            <p className="text-red-600 text-sm">{errors.date_of_birth}</p>
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
            className="w-full border p-2 rounded"
          />
          {touched.phone_number && errors.phone_number && (
            <p className="text-red-600 text-sm">{errors.phone_number}</p>
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
            className="w-full border p-2 rounded"
          />
          {touched.emergency_contact_name && errors.emergency_contact_name && (
            <p className="text-red-600 text-sm">{errors.emergency_contact_name}</p>
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
            className="w-full border p-2 rounded"
          />
          {touched.emergency_contact_phone && errors.emergency_contact_phone && (
            <p className="text-red-600 text-sm">{errors.emergency_contact_phone}</p>
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
            className="w-full border p-2 rounded"
            required
          />
          {touched.emergency_contact_email && errors.emergency_contact_email && (
            <p className="text-red-600 text-sm">{errors.emergency_contact_email}</p>
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
            className="w-full border p-2 rounded bg-white"
          >
            <option value="">Relationship</option>
            <option value="parent">Parent</option>
            <option value="guardian">Legal Guardian</option>
            <option value="other_family">Family Member</option>
            <option value="other">Other</option>
          </select>
          {touched.emergency_contact_relationship && errors.emergency_contact_relationship && (
            <p className="text-red-600 text-sm">{errors.emergency_contact_relationship}</p>
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
            />
            <label htmlFor="parent_consent">
              I confirm that I am a parent/legal guardian and I give consent for this registration
            </label>
          </div>
        )}
        {touched.parent_consent && errors.parent_consent && (
          <p className="text-red-600 text-sm">{errors.parent_consent}</p>
        )}

        {/* Form-level error */}
        {errors.form && (
          <p className="text-red-600 text-center">{errors.form}</p>
        )}

        {/* Privacy policy */}
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
          <p className="text-red-600 text-sm text-center mt-2">{formSummaryError}</p>
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
