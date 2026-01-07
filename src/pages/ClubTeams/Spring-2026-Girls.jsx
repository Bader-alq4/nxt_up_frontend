import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../css_files/ClubTeams.css';

export default function Spring2026Girls() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="program-page">
      <div className="program-container">

        {/* HERO */}
        <section className="program-hero">
          <div className="program-hero-text">
            <span className="program-eyebrow">Spring · April – July</span>
            <h1>
              Spring 2026<br />
              <span>Girls Program</span>
            </h1>
            <p className="program-lead">
              A long-term development partnership built to support competitive girls athletes
              with structure, clarity, and consistency.
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

        {/* WHAT'S INCLUDED */}
        <section className="program-section">
          <h2>What's Included in Your Season Fee</h2>
          <div className="included-grid">
            <div className="included-item">
              <h3>Structured Practices</h3>
              <p>Twice per week, 1.5 hours per session throughout the season</p>
            </div>
            <div className="included-item">
              <h3>Tournament Entry Fees</h3>
              <p>All tournament registration based on your selected commitment option</p>
            </div>
            <div className="included-item">
              <h3>Shoot 360 Access</h3>
              <p>20 training sessions at Sherwood Park location with data-driven feedback</p>
            </div>
            <div className="included-item">
              <h3>Team Bonding Activities</h3>
              <p>Monthly team activities including game nights, outings, and social events</p>
            </div>
            <div className="included-item">
              <h3>Professional Coaching</h3>
              <p>Certified coaches following National Coaching Certification Program standards</p>
            </div>
            <div className="included-item">
              <h3>Media Coverage</h3>
              <p>Professional photography, highlight content, and select games live-streamed on our official Twitch channel </p>
            </div>
            <div className="included-item">
              <h3>Gym Rentals</h3>
              <p>All facility costs for practices and team activities covered</p>
            </div>
            <div className="included-item">
              <h3>Travel Accommodations</h3>
              <p>Hotel stays for Calgary tournament and full travel package for U.S. option</p>
            </div>
          </div>
        </section>

        {/* AGE GROUPS */}
        <section className="program-section">
          <h2>Age Groups</h2>
          <ul className="simple-list">
            <li>U15 Girls</li>
            <li>U17 Girls</li>
          </ul>
        </section>

        {/* SEASON DATES */}
        <section className="program-section">
          <h2>Season Dates</h2>
          <ul className="simple-list">
            <li><strong>Local & Provincial Options:</strong> April 1st – June 30th</li>
            <li><strong>International Option:</strong> April 1st – July 15th</li>
          </ul>
        </section>

        {/* PRACTICES & DEVELOPMENT */}
        <section className="program-section">
          <h2>Practices & Player Development</h2>
          <p>
            Teams train twice per week for 1.5 hours throughout the season. Practices are
            intentionally structured to balance individual skill development, team concepts,
            basketball IQ, and competitive situations.
          </p>
          <p>
            Players are coached in an environment where expectations are clear and growth is
            intentional. Athletes are encouraged to take ownership of their development and
            train consistently throughout the season.
          </p>
        </section>

        {/* SHOOT 360 */}
        <section className="program-section">
          <h2>Shoot 360 Skill Development</h2>
          <p>
            All registered players receive 20 Shoot 360 training sessions at the Sherwood Park
            location. Shoot 360 is an automated, data-driven training system focused on shooting
            repetition, footwork, and decision-making with real-time feedback.
          </p>
          <p>
            Players book sessions independently outside of team practices. A group orientation
            will be hosted at the beginning of the season to ensure athletes understand how to
            maximize their sessions.
          </p>
        </section>

        {/* TOURNAMENT PLAN */}
        <section className="program-section">
          <h2>Tournament Plan</h2>

          <div className="tournament-option-block">
            <h3>Local Option – Edmonton Tournaments</h3>
            <ul className="simple-list">
              <li>Rocky Mountain Hoops – April 24–26</li>
              <li>Good Hoops Spring Classic – May 8–10</li>
              <li>Swoosh Volvo Challenge – May 15–17</li>
              <li>Genesis YEG Championship – June 5–7</li>
            </ul>
          </div>

          <div className="tournament-option-block">
            <h3>Provincial Option – Includes Local + Calgary</h3>
            <p className="option-note">All Edmonton tournaments listed above, plus:</p>
            <ul className="simple-list">
              <li>Alley-Oop Basketball The Main Event – June 19–21 (Calgary)</li>
            </ul>
          </div>

          <div className="tournament-option-block">
            <h3>International Option – Includes Local + Provincial + U.S.</h3>
            <p className="option-note">All Edmonton and Calgary tournaments listed above, plus:</p>
            <ul className="simple-list">
              <li>Hype Her Hoops Cali Cup – July 3–5 (California)</li>
            </ul>
          </div>
        </section>

        {/* COACHING STANDARDS */}
        <section className="program-section">
          <h2>Coaching Standards</h2>
          <p>
            Next Up follows national coaching standards through the National Coaching Certification
            Program framework. Practices are age-appropriate, progressive, and aligned with long-term
            athlete development principles.
          </p>
          <p>
            Coaches focus on teaching, decision-making, confidence, and accountability rather than
            short-term results. Clear expectations are set for effort, professionalism, and how players
            represent themselves on and off the court.
          </p>
        </section>

        {/* TEAM CULTURE */}
        <section className="program-section">
          <h2>Team Experience & Culture</h2>
          <p>
            Team culture is a major focus of the Next Up rebrand. Each team will participate in a 
            monthly team bonding activity included in the season fee. Activities may include game nights, 
            movie nights, pizza parties, group outings, or similar experiences that help players connect 
            outside of basketball.
          </p>
          <p>
            These moments build trust, communication, leadership, and chemistry, all of which carry over 
            to performance and enjoyment on the court.
          </p>
        </section>

        {/* PRICING */}
        <section className="program-section">
          <h2>Pricing & Payment Options</h2>

          <p className="pricing-intro">
            A <strong>25% deposit is required at registration</strong>. All payments are processed
            through TeamSnap. After the deposit is made, families may choose between monthly or
            bi-weekly payment plans.
          </p>

          <div className="pricing-option-wrapper">
            <div className="pricing-option-header">
              <h3>Local Option</h3>
              <span className="pricing-total">$1,700 total</span>
            </div>
            <table className="pricing-table">
              <tbody>
                <tr>
                  <td>Deposit at registration</td>
                  <td>$425</td>
                </tr>
                <tr>
                  <td>Monthly payment plan</td>
                  <td>3 × $425</td>
                </tr>
                <tr>
                  <td>Bi-weekly payment plan</td>
                  <td>6 × $212.50</td>
                </tr>
                <tr>
                  <td><strong>Pay in full (save $170)</strong></td>
                  <td><strong>$1,530</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pricing-option-wrapper">
            <div className="pricing-option-header">
              <h3>Provincial Option</h3>
              <span className="pricing-total">$2,000 total</span>
            </div>
            <table className="pricing-table">
              <tbody>
                <tr>
                  <td>Deposit at registration</td>
                  <td>$500</td>
                </tr>
                <tr>
                  <td>Monthly payment plan</td>
                  <td>3 × $500</td>
                </tr>
                <tr>
                  <td>Bi-weekly payment plan</td>
                  <td>6 × $250</td>
                </tr>
                <tr>
                  <td><strong>Pay in full (save $200)</strong></td>
                  <td><strong>$1,800</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pricing-option-wrapper">
            <div className="pricing-option-header">
              <h3>International Option</h3>
              <span className="pricing-total">$2,700 total</span>
            </div>
            <table className="pricing-table">
              <tbody>
                <tr>
                  <td>Deposit at registration</td>
                  <td>$675</td>
                </tr>
                <tr>
                  <td>Monthly payment plan</td>
                  <td>3 × $675</td>
                </tr>
                <tr>
                  <td>Bi-weekly payment plan</td>
                  <td>6 × $337.50</td>
                </tr>
                <tr>
                  <td><strong>Pay in full (save $270)</strong></td>
                  <td><strong>$2,430</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* TRAVEL INFO */}
        <section className="program-section">
          <h2>Travel & Accommodations</h2>
          
          <div className="tournament-option-block">
            <h3>Calgary Tournament</h3>
            <p>
              Hotel accommodations are included for players. Transportation to and from Calgary is not 
              included. Players may travel with family or choose to use FlixBus as a coordinated group option.
            </p>
            <p>
              Players will stay in shared hotel rooms with teammates as part of the team-building experience. 
              Players preferring separate accommodations with their family must notify us in advance. 
              Discounted group hotel rates will be available for parents and families attending.
            </p>
          </div>

          <div className="tournament-option-block">
            <h3>U.S. Travel Tournament</h3>
            <p>
              Flights, hotel accommodations, and airport and game transportation are included for 
              International Option players. Players will stay in shared rooms with teammates at a 
              hotel or Airbnb unless communicated with us that you'll stay with family.
            </p>
            <p>
              Meals are the responsibility of the player. Coaches supervise players throughout travel 
              days, hotel stays, and tournament venues.
            </p>
          </div>
        </section>

        {/* OPTIONAL TRAINING */}
        <section className="program-section">
          <h2>Optional Training Add-Ons</h2>
          <p>
            For players wanting additional training sessions outside of team practices, contact 
            Coach Parker directly through Instagram at <strong>@parkedbythebench</strong>.
          </p>
        </section>

        {/* CTA */}
        <section className="program-actions">
          <Link to="/ClubTeams/Tryouts">View Tryout Information</Link>
          <Link to="/ClubTeams" className="secondary-link">Back to Club Teams</Link>
        </section>

      </div>
    </div>
  );
}