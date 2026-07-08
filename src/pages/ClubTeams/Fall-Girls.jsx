import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../css_files/ClubTeams.css';

export default function FallGirls() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="program-page">
      <div className="program-container">

        {/* HERO */}
        <section className="program-hero">
          <div className="program-hero-text">
            <span className="program-eyebrow">Fall · September – October</span>
            <h1>
              Fall 2026<br />
              <span>Girls Program</span>
            </h1>
            <p className="program-lead">
              Keep Growing. Keep Competing. The Next Up Hoops Girls Fall Program is designed to
              bridge the gap between the Spring/Summer club season and the school basketball
              season, giving athletes the opportunity to continue developing through consistent
              training, meaningful competition, and experienced coaching.
            </p>
          </div>

          <div className="program-hero-images">
            <div className="hero-image-primary">
              <img
                src="https://res.cloudinary.com/dahquiy48/image/upload/v1767749524/new-girls-bench_ecazxk.jpg"
                alt="Next Up Hoops girls game action"
              />
            </div>
            <div className="hero-image-secondary">
              <img
                src="https://res.cloudinary.com/dahquiy48/image/upload/v1767749524/solo-girl_uit4mn.jpg"
                alt="Next Up Hoops girls training"
              />
            </div>
          </div>
        </section>

        {/* PROGRAM */}
        <section className="program-section">
          <h2>Program</h2>

          <div className="pricing-option-wrapper">
            <div className="pricing-option-header">
              <h3>U15 • U16 • U17 • U18</h3>
              <span className="pricing-total">$795</span>
            </div>
            <p className="option-note">Season: September 1 – October 31, 2026 · Flexible payment plans available during registration</p>
            <ul className="simple-list">
              <li>One 2-hour team practice each week</li>
              <li>One organized team scrimmage each week</li>
              <li>1 Edmonton tournament (Next Up Fall Invitational)</li>
              <li>1 Calgary tournament (Edge Prep International Invitational)</li>
              <li>Hotel accommodations for the Calgary tournament</li>
              <li>Official Next Up Hoops game uniform</li>
              <li>Official Next Up Hoops sweatsuit</li>
              <li>Official Team Media Day</li>
              <li>Professional media coverage throughout the season by Next Up Studios</li>
              <li>Experienced coaching staff</li>
            </ul>
          </div>
        </section>

        {/* WHY CHOOSE NEXT UP */}
        <section className="program-section">
          <h2>Why Choose Next Up?</h2>
          <div className="included-grid">
            <div className="included-item">
              <h3>Structured Weekly Development</h3>
              <p>Continue building your skills through consistent weekly practices focused on individual development, basketball IQ, and team concepts.</p>
            </div>
            <div className="included-item">
              <h3>Meaningful Competition</h3>
              <p>Apply what you learn in practice through weekly scrimmages and tournament play in a structured and competitive environment.</p>
            </div>
            <div className="included-item">
              <h3>Experienced Coaching</h3>
              <p>Train with coaches who are committed to helping athletes build confidence, develop leadership skills, and continue growing both on and off the court.</p>
            </div>
            <div className="included-item">
              <h3>Next Up Studios</h3>
              <p>Every athlete participates in our Official Team Media Day and receives professional media coverage throughout the season, including photography, player features, game-day content, and social media coverage.</p>
            </div>
            <div className="included-item">
              <h3>Premium Athlete Experience</h3>
              <p>From premium team apparel to organized communication and a development-first culture, every detail is designed to create a first-class experience for athletes and families.</p>
            </div>
          </div>
        </section>

        {/* PRACTICE & COMPETITION */}
        <section className="program-section">
          <h2>Practice & Competition</h2>

          <h3>Weekly Team Practice</h3>
          <p>
            Each team receives one 2-hour practice per week. Practice days and locations are
            determined following team selections and are scheduled based on what best
            accommodates each team throughout the Edmonton area.
          </p>

          <h3>Weekly Team Scrimmages</h3>
          <p>
            Each team participates in one organized scrimmage each week against another Next
            Up Hoops team or, when available, a local club. Scrimmages are primarily hosted at
            The Centre Sports Complex.
          </p>

          <h3>Tournament Competition</h3>
          <p>
            Girls teams compete in 1 Edmonton tournament (Next Up Fall Invitational) and 1
            Calgary tournament (Edge Prep International Invitational). Hotel accommodations
            are included for the Calgary tournament.
          </p>
          <p>
            Transportation to and from Calgary, along with transportation between the hotel
            and tournament venue, is not included. Families are encouraged to coordinate
            transportation through carpooling. FlixBus is also a convenient option for athletes
            travelling independently.
          </p>
        </section>

        {/* FALL TRYOUTS */}
        <section className="program-section">
          <h2>Fall Tryouts</h2>
          <p>
            Participation in the Girls Fall Program requires attendance at the Fall 2026
            Tryouts. Our multi-step evaluation process provides every athlete with multiple
            opportunities to earn their place within the program.
          </p>
          <Link to="/ClubTeams/Fall-Tryouts">View Fall Tryout Information →</Link>
        </section>

        {/* CTA */}
        <section className="program-actions">
          {/* TODO(fall-2026-registration): replace with real Girls Fall Program registration URL */}
          <a href="#">Register for the Girls Fall Program</a>
          <Link to="/ClubTeams" className="secondary-link">Back to Club Teams</Link>
        </section>

      </div>
    </div>
  );
}
