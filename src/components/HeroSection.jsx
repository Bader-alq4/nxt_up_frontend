import React from 'react';
import { Link } from 'react-router-dom';
import '../css_files/HeroSection.css';

export default function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-image-layer">
        <img
          src="https://res.cloudinary.com/dahquiy48/image/upload/w_500,q_auto,f_auto/group_f9jng3.jpg"
          alt=""
          loading="eager"
          decoding="sync"
          fetchpriority="high"
        />
      </div>
      <div className="noise-overlay"></div>
      <div className="vignette"></div>

      <div className="hero-content">
        <div className="top-marker">Edmonton</div>

        <div className="center-lockup">
          <h1 className="hero-title">still running.</h1>
          <p className="hero-subtitle">edmonton • calgary • U.S.</p>
        </div>

        <div className="bottom-actions">
          <Link to="/ClubTeams/Spring-2026-Boys" className="action-link">
            <span>Spring 2026 Boys</span>
            <span className="action-arrow">→</span>
          </Link>
          <Link to="/ClubTeams/Spring-2026-Girls" className="action-link">
            <span>Spring 2026 Girls</span>
            <span className="action-arrow">→</span>
          </Link>
          <Link to="/ClubTeams/Tryouts" className="action-link">
            <span>Tryout Information</span>
            <span className="action-arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}