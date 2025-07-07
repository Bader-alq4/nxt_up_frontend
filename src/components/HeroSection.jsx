import React from 'react';
import { Link } from 'react-router-dom';
import '../css_stuff/HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-fullscreen">
      <div className="hero-image-side">
        <img
          src="/group.jpg"
          alt="Canada Basketball Approved"
          className="hero-img"
        />
      </div>

      <div className="hero-text-side">
        <h1>Where the Work Speaks for Itself</h1>
        <p>Building More Than Athletes. Creating Leaders for Life.</p>
        <div className="hero-buttons">
          <Link to="FallTeams">
            <button className="hero-button">Fall Season</button>
          </Link>
          <Link to="SpringTeams">
            <button className="hero-button">Spring Season</button>
          </Link>
          <Link to="/Training">
            <button className="hero-button">Camps & Programming</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
