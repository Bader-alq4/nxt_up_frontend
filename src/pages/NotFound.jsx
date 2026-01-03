import React from "react";
import { Link } from "react-router-dom";
import "../css_stuff/HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-fullscreen portal">
      {/* IMAGE */}
      <div className="hero-image-side">
        <img
          src="https://res.cloudinary.com/dahquiy48/image/upload/w_500,q_auto,f_auto/group_f9jng3.jpg"
          alt="Session live"
          className="hero-img"
        />
      </div>

      {/* INTERFACE */}
      <div className="hero-text-side portal-ui">
        <span className="portal-tag">SESSION ACTIVE</span>

        <h1>Gym Access</h1>

        <p>Authorized players only.</p>

        <div className="hero-buttons portal-actions">
          <Link to="/FallTeams">
            <button>Fall</button>
          </Link>

          <Link to="/SpringTeams">
            <button>Spring</button>
          </Link>

          <Link to="/Training">
            <button>Training</button>
          </Link>
        </div>

        <div className="portal-meta">
          <span>Status: Live</span>
          <span>Location: Locked</span>
        </div>
      </div>
    </section>
  );
}
