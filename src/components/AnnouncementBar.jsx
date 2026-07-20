import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css_files/AnnouncementBar.css';

const STORAGE_KEY = 'nuh-announcement-fall2026-dismissed';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== 'true') {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      /* ignore */
    }
  };

  if (!visible) return null;

  return (
    <div className="announcement-bar">
      <Link to="/ClubTeams/Fall-Tryouts" className="announcement-content">
        <span className="announcement-label">Fall 2026 Tryouts</span>
        <span className="announcement-divider" aria-hidden="true">·</span>
        <span className="announcement-text">Registration Open</span>
        <span className="announcement-cta">Register</span>
      </Link>
      <button
        className="announcement-close"
        onClick={dismiss}
        aria-label="Dismiss announcement"
      >
        ×
      </button>
    </div>
  );
}
