import { useContext, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api/axios';
import AuthContext from '../context/AuthContext';
import '../css_files/ForgotPassword.css'; // this is just to use the css style from the forgot password button so that I dont have to create another css file for tryoutRegister 

/**
 * Tryout Registration (final polished layout)
 */
function TryoutRegister() {
  const { user } = useContext(AuthContext);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [ageGroup, setAgeGroup] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [activeSeason, setActiveSeason] = useState(null);
  const [existingRegistration, setExistingRegistration] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [regRes, seasonRes] = await Promise.all([
          api.get('/tryouts/my').catch(err => {
            if (err.response?.status !== 404) throw err;
            return { data: null };
          }),
          api.get('/seasons/active'),
        ]);
        setExistingRegistration(regRes.data);
        setActiveSeason(seasonRes.data);
      } catch {
        setError('Failed to load data. Please refresh.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchAll();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    if (!paymentMethod || !ageGroup) {
      return setError('Please select both payment method and age group.');
    }
    try {
      const res = await api.post('/tryouts/register', {
        payment_method: paymentMethod,
        age_group: ageGroup,
      });
      if (paymentMethod === 'cash') {
        alert('Registered! Please bring cash on tryout day.');
        navigate('/dashboard');
      } else if (res.data.url) {
        window.location.href = res.data.url;
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed.');
    }
  };

  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 text-lg animate-pulse">Loading…</p>
      </section>
    );
  }

  if (existingRegistration?.hasRegistered) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white max-w-md w-full rounded-xl shadow-lg p-6 space-y-4 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            You Are Already Registered
          </h2>
          <div className="text-sm text-gray-700 space-y-2">
            <p><strong>Season:</strong> {existingRegistration.season}</p>
            <p>
              <strong>Tryout #:</strong>#
              {existingRegistration.tryout_number}
            </p>
            <p>
              <strong>Payment:</strong>{' '}
              {existingRegistration.payment_method === 'cash'
                ? 'Cash'
                : `${existingRegistration.payment_status} (${existingRegistration.payment_method})`}
            </p>
          </div>
          <Link
            to="/dashboard"
            className="inline-block w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Go to Dashboard
          </Link>
        </div>
      </section>
    );
  }

  if (!activeSeason || !activeSeason.is_active) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="bg-white max-w-md w-full rounded-xl shadow-lg p-6 text-center space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">
            {activeSeason ? 'Registration Closed' : 'No Active Season'}
          </h2>
          <p className="text-gray-600">
            {activeSeason
              ? `Registration for ${activeSeason.name} is currently closed.`
              : 'Please check back later.'}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg px-6 py-8">
        <h1 className="forgot-password">
          Tryout Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <p className="text-sm text-gray-700 text-center">
            Welcome, {user.first_name}! You are registering for the {' '}
            <strong>{activeSeason.name}</strong> season.
          </p>

          <div className="text-sm text-gray-600 mt-4 space-y-1">
            <p className="font-semibold text-gray-800">Age Group Clarification:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>13U – Born in 2012 or later</li>
              <li>15U – Born in 2010 or later</li>
              <li>16U – Born in 2009 or later</li>
              <li>17U – Born in 2008 or later</li>
              <li>18U – Born in 2007 or later</li>
            </ul>
          </div>


          {/* Inner container is now a DIV, not a FORM */}
          <div className="space-y-8">

            {/* Payment Method */}
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-4 space-y-4">
                <label className="grid grid-cols-[1fr_auto] items-center cursor-pointer">
                  <span className="text-sm font-medium text-gray-900">
                    <strong>Pay with Cash</strong>
                  </span>
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={() => setPaymentMethod('cash')}
                    className="h-5 w-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-gray-300"
                  />
                </label>
                <label className="grid grid-cols-[1fr_auto] items-center cursor-pointer">
                  <span className="text-sm font-medium text-gray-900 mb-2 block custom-spacing">
                    <strong>Pay with Card (Stripe)</strong>
                  </span>
                  <input
                    type="radio"
                    name="payment"
                    value="stripe"
                    checked={paymentMethod === 'stripe'}
                    onChange={() => setPaymentMethod('stripe')}
                    className="h-5 w-5 text-blue-600 focus:ring-2 focus:ring-blue-500 border-gray-300"
                  />
                </label>
              </div>
            </div>

            {/* Age Group */}
            <div className="space-y-3">
              <label
                htmlFor="age-group"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Age Group
              </label>
              <select
                id="age-group"
                required
                value={ageGroup}
                onChange={e => setAgeGroup(e.target.value)}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">-- Select Age Group --</option>
                {activeSeason.age_groups.map(group => (
                  <option key={group} value={group}>
                    {group}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {error && (
            <p className="bg-red-100 text-red-800 rounded-md px-4 py-3 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-medium"
          >
            Complete Registration
          </button>
        </form>
      </div>
    </section>
  );
}

export default TryoutRegister;
