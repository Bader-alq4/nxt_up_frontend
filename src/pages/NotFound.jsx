import React from 'react';
import { Link } from 'react-router-dom';
import '../css_files/NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        {/* 404 + Ball */}
        <div className="not-found-header">
          <h1 className="not-found-number">404</h1>
          
          {/* Ball */}
          <div className="not-found-ball-container">
            <div className="not-found-ball">🏀</div>
            <div className="not-found-shadow"></div>
          </div>
        </div>

        {/* Text */}
        <div className="not-found-content">
          <h2 className="not-found-title">You Missed the Shot</h2>
          <p className="not-found-message">
            The page you're looking for doesn't exist or was moved.
            Even legends miss sometimes.
          </p>
        </div>

        {/* Actions */}
        <div className="not-found-actions">
          <Link to="/" className="not-found-btn not-found-btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
