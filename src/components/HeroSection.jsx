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
        <span className="top-marker">Edmonton</span>

        <div className="hero-middle">
          <div className="hero-headline-block">
            <h1 className="hero-title">
              whats Next <br /> is earned.
            </h1>
            <p className="hero-subtitle">Elite Basketball Club Based in Edmonton, Alberta 🇨🇦</p>
          </div>

          <Link to="/ClubTeams/Fall-Tryouts" className="hero-tryouts-cta">
            <span className="hero-tryouts-cta-label">Fall 2026 · Now Open</span>
            <span className="hero-tryouts-cta-title">Tryouts</span>
            <span className="hero-tryouts-cta-arrow">Find your spot →</span>
          </Link>
        </div>

        <div className="bottom-actions">
          <Link to="/ClubTeams/Fall-Boys" className="action-link">
            <span>Fall 2026 Boys</span>
            <span className="action-arrow">→</span>
          </Link>
          <Link to="/ClubTeams/Fall-Girls" className="action-link">
            <span>Fall 2026 Girls</span>
            <span className="action-arrow">→</span>
          </Link>
          <Link to="/ClubTeams/Fall-Tryouts" className="action-link">
            <span>Tryout Information</span>
            <span className="action-arrow">→</span>
          </Link>
        </div>
      </div>

      <Link to="/verified" className="hero-verified" aria-label="Canada Basketball Verified club">
        <img
          src="/CanadaBasketball-Verified-Bilingual-Red.png"
          alt="Canada Basketball Verified"
          loading="eager"
        />
      </Link>
    </div>
  );
}