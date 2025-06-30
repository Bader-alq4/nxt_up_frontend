import React from 'react';
import { Link } from 'react-router-dom';
import '../css_stuff/HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Image + Text Row */}
      <div className="hero-row">
        <div className="image-wrapper">
          <img
            src="/group.jpg"
            alt="Canada Basketball Approved"
            className="hero-image"
          />
        </div>

        <div className="text-block-hero-section">
          <p>
            Empowering student-athletes through unity, competition, and growth — building character, confidence, and lifelong bonds both on and off the court.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="button-row">
        <Link to="/tryouts-info/fall">
          <button className="hero-button">Fall Season</button>
        </Link>
        <Link to="/tryouts-info/spring">
          <button className="hero-button">Spring Season</button>
        </Link>
        <Link to="/Training">
          <button className="hero-button">Camps & Programming</button>
        </Link>
      </div>
    </section>
  );
}
