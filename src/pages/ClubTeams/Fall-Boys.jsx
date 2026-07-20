import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import StickyRegister from '../../components/StickyRegister';
import '../../css_files/ClubTeams.css';

export default function FallBoys() {
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
              <span>Boys Program</span>
            </h1>
            <p className="program-lead">
              Continue Building Your Game. The Next Up Hoops Boys Fall Program is designed to
              bridge the gap between the Spring/Summer club season and the school basketball
              season, providing athletes with a structured environment to keep training,
              competing, and improving through consistent coaching and meaningful competition.
            </p>
          </div>

          <div className="boys-hero-images">
            <div className="boys-hero-primary">
              <img
                src="https://res.cloudinary.com/dahquiy48/image/upload/f_auto,q_auto,w_900/v1767640380/boys-jumpshot_ir4tr4.jpg"
                alt="Next Up Hoops boys training"
                loading="eager"
                fetchpriority="high"
              />
            </div>
            <div className="boys-hero-secondary">
              <img
                src="https://res.cloudinary.com/dahquiy48/image/upload/f_auto,q_auto,w_900/v1767375626/boys_group_highlight_dih4fc.jpg"
                alt="Next Up Hoops boys game action"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* PROGRAM OPTIONS */}
        <section className="program-section">
          <h2>Program Options</h2>

          <div className="pricing-option-wrapper">
            <div className="pricing-option-header">
              <h3>U13 • U14</h3>
              <span className="pricing-total">$595</span>
            </div>
            <p className="option-note">Season: September 1 – October 31, 2026</p>
            <ul className="simple-list">
              <li>One 2-hour team practice each week</li>
              <li>One organized team scrimmage each week</li>
              <li>2 Edmonton tournaments (Next Up Fall Invitational, Good Hoops Fall Classic)</li>
              <li>Official Next Up Hoops game uniform</li>
              <li>Official Next Up Hoops sweatsuit</li>
              <li>Official Team Media Day</li>
              <li>Professional media coverage throughout the season by Next Up Studios</li>
              <li>Experienced coaching staff</li>
              <li>Flexible payment plans available during registration</li>
            </ul>
          </div>

          <div className="pricing-option-wrapper">
            <div className="pricing-option-header">
              <h3>U15 • U16 • U17 • U18</h3>
              <span className="pricing-total">$795</span>
            </div>
            <p className="option-note">Season: September 1 – October 31, 2026</p>
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
              <li>Flexible payment plans available during registration</li>
            </ul>
          </div>
        </section>

        {/* WHY CHOOSE NEXT UP */}
        <section className="program-section">
          <h2>Why Choose Next Up?</h2>
          <div className="included-grid">
            <div className="included-item">
              <h3>Structured Weekly Development</h3>
              <p>Continue improving through consistent weekly practices focused on skill development, basketball IQ, and team concepts.</p>
            </div>
            <div className="included-item">
              <h3>Meaningful Competition</h3>
              <p>Apply what you learn in practice through weekly scrimmages and tournament play against quality competition.</p>
            </div>
            <div className="included-item">
              <h3>Experienced Coaching</h3>
              <p>Train with coaches who are committed to helping athletes grow both on and off the court.</p>
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
            U13/U14 teams compete in 2 Edmonton tournaments. U15–U18 teams compete in 1
            Edmonton tournament and 1 Calgary tournament. Hotel accommodations are included
            for the Calgary tournament. Transportation to and from Calgary is not included.
          </p>
        </section>

        {/* FALL TRYOUTS */}
        <section className="program-section">
          <h2>Fall Tryouts</h2>
          <p>
            Participation in the Boys Fall Program requires attendance at the Fall 2026
            Tryouts. Our multi-step evaluation process provides every athlete with multiple
            opportunities to earn their place within the program.
          </p>
          <Link to="/ClubTeams/Fall-Tryouts">View Fall Tryout Information →</Link>
        </section>

        {/* CTA */}
        <section className="program-actions">
          <a
            data-register-cta
            href="https://registration.teamsnap.com/form/69129"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register for the Boys Fall Program
          </a>
          <Link to="/ClubTeams" className="secondary-link">Back to Club Teams</Link>
        </section>

      </div>

      <StickyRegister label="Boys Fall Program" note="Tryout registration open" />
    </div>
  );
}
