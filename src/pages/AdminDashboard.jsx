import { useState, useEffect } from 'react';
import api from '../api/axios';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('tryouts');
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState('');
  const [tryouts, setTryouts] = useState([]);
  const [notification, setNotification] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filterGroup, setFilterGroup] = useState('All');
  const [filterResult, setFilterResult] = useState('All');
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    const fetchSeasons = async () => {
      try {
        const res = await api.get('/seasons/all');

                if (res.data && res.data.length > 0) {
      setSeasons(res.data);
          setSelectedSeason(res.data[0].id);
        }
      } catch (err) {
        showNotification('error', 'Failed to fetch seasons');
      }
    };
    fetchSeasons();
  }, []);

  useEffect(() => {
    const fetchTryouts = async () => {
      if (!selectedSeason) {
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      try {
        const res = await api.get(`/admin/tryouts?season_id=${selectedSeason}`);
        setTryouts(res.data);
      } catch (err) {
        showNotification('error', 'Failed to fetch tryout data');
      } finally {
        setIsLoading(false);
      }
    };
    fetchTryouts();
  }, [selectedSeason]);

  const showNotification = (type, message, details = null) => {
    setNotification({ type, message, details });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleAttendanceToggle = async (tryoutId, currentStatus) => {
    try {
      await api.patch(`/admin/tryouts/${tryoutId}/attended`, {
        attended: !currentStatus,
      });      
      
      
      setTryouts(prev =>
        prev.map(t => (t.id === tryoutId ? { ...t, attended: !currentStatus } : t))
      );
      showNotification('success', 'Attendance updated successfully');
    } catch (err) {
      showNotification('error', 'Failed to update attendance');
    }
  };

  const handleResultChange = async (tryoutId, newResult) => {
    try {
      await api.patch(`/admin/tryouts/${tryoutId}/selection`, {
        tryout_id: tryoutId,
        result: newResult,
      });
      
      setTryouts(prev =>
        prev.map(t => (t.id === tryoutId ? { ...t, result: newResult } : t))
      );
      showNotification('success', 'Selection result updated successfully');
    } catch (err) {
      showNotification('error', 'Failed to update selection result');
    }
  };

  const handleSendEmails = async () => {
    setIsSending(true);
  
    try {
      const res = await api.post(`/admin/tryouts/${selectedSeason}/send-results`);
  
      const updated = await api.get(`/admin/tryouts?season_id=${selectedSeason}`);
      setTryouts(updated.data);
  
      showNotification('success', 'Emails sent successfully', {
        total: res.data.details.total,
        sent: res.data.details.sent,
        failed: res.data.details.failed,
        failedEmails: res.data.failedEmails
      });
    } catch (err) {
      showNotification('error', 'Failed to send emails');
    } finally {
      setIsSending(false);
    }
  };
  
  const handleSendSingleEmail = async (tryoutId) => {
    try {
      await api.post(`/admin/tryouts/${tryoutId}/resend-result`);

      setTryouts(prev =>
        prev.map(t => (t.id === tryoutId ? { ...t, email_sent: true } : t))
      );
      showNotification('success', 'Email sent successfully');
    } catch (err) {
      showNotification('error', 'Failed to send email');
    }
  };

  const handleViewPlayerDetails = (player) => {
    console.log('Player Details:', player);
    setSelectedPlayer(player);
    setActiveTab('players');
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <div className="tab-navigation">
          <button 
            className={`tab-button ${activeTab === 'tryouts' ? 'active' : ''}`}
            onClick={() => setActiveTab('tryouts')}
          >
            Tryouts
          </button>
          <button 
            className={`tab-button ${activeTab === 'players' ? 'active' : ''}`}
            onClick={() => setActiveTab('players')}
          >
            Player Details
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      {notification && (
        <div className={`toast-notification ${notification.type}`}>
          <div className="toast-content">
            <span className="toast-message">{notification.message}</span>
            {notification.details && (
              <div className="toast-details">
                <p>Total processed: {notification.details.total}</p>
                <p>Successfully sent: {notification.details.sent}</p>
                {notification.details.failed > 0 && (
                  <p>Failed to send: {notification.details.failed}</p>
                )}
                {notification.details.failedEmails && (
                  <div className="failed-emails">
                    <p>Failed recipients:</p>
                    <ul>
                      {notification.details.failedEmails.map((fail, idx) => (
                        <li key={idx}>{fail.name} ({fail.email})</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
          <button className="toast-close" onClick={() => setNotification(null)}>
            <span>&times;</span>
          </button>
        </div>
      )}

      {activeTab === 'tryouts' && (
        <div className="tryouts-section">
          <div className="controls-section">
            <div className="season-selector">
              <label htmlFor="season-select">Season:</label>
        <select
          id="season-select"
          value={selectedSeason}
          onChange={(e) => setSelectedSeason(e.target.value)}
        >
                <option value="">Select Season</option>
          {seasons.map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
      </div>

      {selectedSeason && (
              <>
                <div className="filters">
                  <div className="filter-group">
                    <label htmlFor="age-group">Age Group:</label>
                    <select
                      id="age-group"
                      value={filterGroup}
                      onChange={(e) => setFilterGroup(e.target.value)}
                    >
                      <option value="All">All Groups</option>
              <option value="13U Boys">13U Boys</option>
              <option value="15U Boys">15U Boys</option>
              <option value="16U Boys">16U Boys</option>
              <option value="17U Boys">16U Boys</option>
              <option value="18U Boys">18U Boys</option>
              <option value="15U Girls">15U Girls</option>
              <option value="17U Girls">17U Girls</option>
            </select>
                  </div>

                  <div className="filter-group">
                    <label htmlFor="result-filter">Result:</label>
                    <select
                      id="result-filter"
                      value={filterResult}
                      onChange={(e) => setFilterResult(e.target.value)}
                    >
                      <option value="All">All Results</option>
              <option value="selected">Selected</option>
              <option value="not_selected">Not Selected</option>
            </select>
                  </div>
        </div>

        <button
                  className="send-emails-button"
          onClick={handleSendEmails}
                  disabled={isSending}
                >
                  {isSending ? (
                    <span className="button-content">
                      <span className="loading-spinner"></span>
                      Sending Emails...
                    </span>
                  ) : (
                    'Send Result Emails'
                  )}
        </button>
              </>
            )}
          </div>

          {isLoading ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading tryout data...</p>
        </div>
          ) : (
            <div className="table-container">
              <table className="data-table">
        <thead>
          <tr>
            <th>Tryout #</th>
            <th>Name</th>
            <th>Age Group</th>
                    <th>Payment Method</th>
            <th>Attended</th>
            <th>Result</th>
            <th>Email Status</th>
                    <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tryouts
            .filter(t => filterGroup === 'All' || t.age_group === filterGroup)
            .filter(t => filterResult === 'All' || t.result === filterResult)
            .map((t) => (
              <tr key={t.id}>
                <td>{t.tryout_number}</td>
                        <td>
                          <button 
                            className="name-button"
                            onClick={() => handleViewPlayerDetails(t)}
                          >
                            {t.first_name} {t.last_name}
                          </button>
                        </td>
                <td>{t.age_group}</td>
                        <td>
                          <div>{t.payment_method}</div>
                        </td>
                <td>
                          <label className="attendance-toggle">
                  <input
                    type="checkbox"
                    checked={t.attended}
                    onChange={() => handleAttendanceToggle(t.id, t.attended)}
                  />
                            <span className="toggle-slider"></span>
                          </label>
                </td>
                <td>
                  <select
                    value={t.result || ''}
                    onChange={(e) => handleResultChange(t.id, e.target.value)}
                            className={`result-select ${t.result || ''}`}
                  >
                            <option value="">Pending</option>
                    <option value="selected">Selected</option>
                    <option value="not_selected">Not Selected</option>
                  </select>
                </td>
                <td>
                          <span className={`email-status ${t.email_sent ? 'sent' : 'pending'}`}>
                    {t.email_sent ? 'Sent' : 'Not Sent'}
                  </span>
                </td>
                <td>
                  <button
                            className="action-button"
                            onClick={() => handleSendSingleEmail(t.id)}
                  >
                            Resend Email
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
            </div>
          )}
        </div>
      )}

      {activeTab === 'players' && selectedPlayer && (
        <div className="player-details-section">
          <h2>Player Details</h2>
          <div className="player-info-grid">
            <div className="info-group">
              <h3>Personal Information</h3>
              <div className="info-row">
                <label>Name:</label>
                <span>{selectedPlayer.first_name} {selectedPlayer.last_name}</span>
              </div>
              <div className="info-row">
                <label>Date of Birth:</label>
                <span>{new Date(selectedPlayer.date_of_birth).toLocaleDateString()}</span>
              </div>
              <div className="info-row">
                <label>Age Group:</label>
                <span>{selectedPlayer.age_group}</span>
              </div>
              <div className="info-row">
                <label>Under 18:</label>
                <span>{selectedPlayer.is_under_18 ? 'Yes' : 'No'}</span>
              </div>
              {selectedPlayer.is_under_18 && (
                <>
                  <div className="info-row">
                    <label>Parent Consent:</label>
                    <span>{selectedPlayer.parent_consent ? 'Provided' : 'Not Provided'}</span>
                  </div>
                </>
              )}
            </div>

            <div className="info-group">
              <h3>Contact Information</h3>
              <div className="info-row">
                <label>Email:</label>
                <span>{selectedPlayer.email}</span>
              </div>
              <div className="info-row">
                <label>Phone:</label>
                <span>{selectedPlayer.phone_number}</span>
              </div>
            </div>

            <div className="info-group">
              <h3>Emergency Contact</h3>
              <div className="info-row">
                <label>Name:</label>
                <span>{selectedPlayer.emergency_contact_name}</span>
              </div>
              <div className="info-row">
                <label>Phone:</label>
                <span>{selectedPlayer.emergency_contact_phone}</span>
              </div>
              <div className="info-row">
                <label>Relationship:</label>
                <span>{selectedPlayer.emergency_contact_relationship}</span>
              </div>
              <div className="info-row">
                <label>Email:</label>
                <span>{selectedPlayer.emergency_contact_email || 'Not provided'}</span>
              </div>
            </div>

            <div className="info-group">
              <h3>Tryout Information</h3>
              <div className="info-row">
                <label>Tryout Number:</label>
                <span>{selectedPlayer.tryout_number}</span>
              </div>
              <div className="info-row">
                <label>Status:</label>
                <span className={`status ${selectedPlayer.result || 'pending'}`}>
                  {selectedPlayer.result ? selectedPlayer.result : 'Pending'}
                </span>
              </div>
              <div className="info-row">
                <label>Attended:</label>
                <span>{selectedPlayer.attended ? 'Yes' : 'No'}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
