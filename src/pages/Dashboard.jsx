import { useContext, useEffect, useState, useCallback } from 'react';
import api from '../api/axios';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import '../css_stuff/Dashboard.css';

function Dashboard() {
  const { user } = useContext(AuthContext);

  const [tryoutData, setTryoutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [finalizing, setFinalizing] = useState(false); // NEW
  const [error, setError] = useState('');

  const fetchTryoutData = useCallback(async () => {
    // moved out so we can reuse
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      const res = await api.get('/tryouts/my');
      setTryoutData(res.data);
    } catch (err) {
      console.error(err);
      setError('An error occurred while loading your tryout information.');
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    // 1) If this is a success redirect, confirm with the server immediately
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get('session_id');

    const confirmAndRefresh = async () => {
      if (!sessionId || !user) {
        // no confirm needed; just load normally
        await fetchTryoutData();
        return;
      }

      try {
        setFinalizing(true);
        // hit your confirm endpoint (idempotent; safe if webhook already ran)
        await api.get('/payments/confirm', { params: { session_id: sessionId } });
      } catch (e) {
        // optional: we don't block UX on this; webhook may still land
        console.warn('confirmCheckout failed; will still refresh dashboard', e);
      } finally {
        // 2) Always refresh actual state from API
        await fetchTryoutData();

        // 3) Clean the URL so refreshes don’t re-confirm
        window.history.replaceState({}, '', '/dashboard');

        setFinalizing(false);
      }
    };

    confirmAndRefresh();
  }, [user, fetchTryoutData]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <main className="dashboard-content">
        <header className="dashboard-header">
          <h1 className="welcome-text">Welcome, {user.first_name}!</h1>
          {finalizing && <div className="info-banner">Finalizing your payment…</div>}
        </header>

        {error && <div className="error-message">{error}</div>}

        {tryoutData && !tryoutData.hasRegistered && (
          <div className="registration-card">
            <h2>Ready to Join?</h2>
            <p>Register for tryouts to get started!</p>
            <Link to="/TryoutsClosed" className="register-button">
              Register for Tryouts
            </Link>
          </div>
        )}

        {tryoutData && tryoutData.hasRegistered && (
          <div className="info-card">
            <h2>Your Tryout Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <label>Season</label>
                <span>{tryoutData.season}</span>
              </div>
              <div className="info-item">
                <label>Tryout Number</label>
                <span>#{tryoutData.tryout_number}</span>
              </div>
              <div className="info-item">
                <label>Status</label>
                <span className={`status-badge ${tryoutData.result}`}>
                  {tryoutData.result === 'selected'
                    ? 'Selected'
                    : tryoutData.result === 'not_selected'
                    ? 'Not Selected'
                    : 'Awaiting tryout decision'}
                </span>
              </div>
              <div className="info-item">
                <label>Payment</label>
                <span>
                  {tryoutData.payment_method === 'cash'
                    ? 'Cash'
                    : `${tryoutData.payment_status} (${tryoutData.payment_method})`}
                </span>
              </div>
            </div>

            {tryoutData.teamsnap_link && (
              <div className="team-access">
                <h3>Team Access</h3>
                <a
                  href={tryoutData.teamsnap_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="teamsnap-button"
                >
                  Join Your Team on TeamSnap
                </a>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
