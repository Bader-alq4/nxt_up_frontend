import { useContext, useEffect, useState } from 'react';
import api from '../api/axios'; // ✅ your centralized axios instance
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import '../css_stuff/Dashboard.css';

function Dashboard() {
  const { user } = useContext(AuthContext);
  const [tryoutData, setTryoutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTryoutData = async () => {
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
    };

    fetchTryoutData();
  }, [user]);

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
        </header>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {tryoutData && !tryoutData.hasRegistered && (
          <div className="registration-card">
            <h2>Ready to Join?</h2>
            <p>Register for tryouts to get started!</p>
            <Link to="/tryouts" className="register-button"> {/* change Link to to '/tryout when tryouts are open and to TryoutsClosed' when tryouts are closed */}
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
