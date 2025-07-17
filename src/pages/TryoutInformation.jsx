import React from 'react';
import { Link } from 'react-router-dom';
import '../css_stuff/FallTeams.css';

export default function TryoutInformation() {
  return (
    <div className="fall-detail-page">
      <div className="fall-detail-container">
        <div className="fall-detail-content">
          <div className="fall-detail-text">
            <h1 className="fall-detail-title">Tryout Information</h1>
            <p className="fall-detail-desc">
              Ready to join Next Up Hoops? Here’s everything you need to know about our upcoming tryouts for Fall Teams.
            </p>

            <div className="fall-detail-section">
              <h3 className="fall-detail-heading">Tryout Dates & Location</h3>
              <p><strong>Date:</strong> August 10–11, 2025</p>
              <p><strong>Time:</strong> 10:00am – 1:00pm</p>
              <p><strong>Location:</strong> Saville Community Sports Centre, Edmonton, AB</p>
            </div>

            <div className="fall-detail-section">
              <h3 className="fall-detail-heading">Who Can Try Out?</h3>
              <p>Open to all athletes interested in joining our Fall Boys or Girls teams. See team pages for age group details.</p>
            </div>

            <div className="fall-detail-section">
              <h3 className="fall-detail-heading">What to Bring</h3>
              <ul className="fall-detail-list">
                <li>Indoor basketball shoes</li>
                <li>Water bottle</li>
                <li>Reversible jersey or light/dark shirts</li>
                <li>Personal basketball (if possible)</li>
              </ul>
            </div>

            <div className="fall-detail-section">
              <h3 className="fall-detail-heading">Registration Process</h3>
              <p>1. Click the registration button below and fill out the online form.</p>
              <p>2. You will receive a confirmation email with further details.</p>
              <p>3. Tryout fee: $25 (payable online or at the door).</p>
            </div>

            <div className="fall-detail-section">
              <Link to="/register">
                <button className="fall-detail-register-btn">Register for Tryouts</button>
              </Link>
            </div>

            <Link to="/FallTeams">
              <button className="fall-detail-btn">Back to Fall Teams</button>
            </Link>
          </div>
          <div className="fall-detail-image">
            <img src="/tryout.jpg" alt="Basketball Tryouts" />
          </div>
        </div>
      </div>
    </div>
  );
} 