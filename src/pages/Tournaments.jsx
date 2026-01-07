import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css_files/Tournaments.css';

export default function TournamentPlan() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="tournament-plan-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="tournament-wrapper">

        {/* ================= TITLE + INTRO ================= */}
        <div className="page-header-split">
          <div className="header-text">
            <h1>Tournament Experience</h1>
            <p className="header-description">
              Since its inception, Next Up Hoops has competed in high-level tournaments across
              Alberta, Canada, and the United States. The events listed below represent
              <strong> every tournament our teams have participated in</strong>, including
              those scheduled for the current season.
            </p>
          </div>
          <div className="header-image">
            <img 
              src="https://res.cloudinary.com/dahquiy48/image/upload/v1767668511/image_eczqcf.jpg" 
              alt="Tournament action"
            />
          </div>
        </div>

        <p className="top-note">
          Tournament participation varies by season, age group, and commitment option.
          Not all teams attend every event listed below. This page reflects the full
          competitive history and experience of the Next Up program.
        </p>

        {/* ================= EDMONTON ================= */}
        <section className="tournament-section">
          <div className="section-header">
            <h2>Edmonton</h2>
          </div>

          <div className="tournament-list">
            <div className="tournament-item"><span className="tournament-name">Rocky Mountain Hoops</span></div>
            <div className="tournament-item"><span className="tournament-name">Good Hoops Spring Classic</span></div>
            <div className="tournament-item"><span className="tournament-name">Good Hoops Summer Classic</span></div>
            <div className="tournament-item"><span className="tournament-name">Good Hoops Fall Classic</span></div>
            <div className="tournament-item"><span className="tournament-name">Great Canadian Shootout</span></div>
            <div className="tournament-item"><span className="tournament-name">Swoosh Maximum Madness</span></div>
            <div className="tournament-item"><span className="tournament-name">Altitude Invitational</span></div>
          </div>

          <div className="tournament-image">
            <img 
              src="https://res.cloudinary.com/dahquiy48/image/upload/v1767375664/fall_girls_detail_rsftzq.jpg" 
              alt="Edmonton tournament action"
            />
            <div className="image-caption">home court advantage</div>
          </div>
        </section>

        {/* ================= CALGARY ================= */}
        <section className="tournament-section">
          <div className="section-header">
            <h2>Calgary</h2>
          </div>

          <div className="split-content">
            <div className="tournament-list">
              <div className="tournament-item"><span className="tournament-name">Alley-Oop Basketball – The Main Event</span></div>
              <div className="tournament-item"><span className="tournament-name">Genesis Classic</span></div>
              <div className="tournament-item"><span className="tournament-name">Edge Prep Invitational</span></div>
            </div>

            <div className="tournament-image-inline">
              <img 
                src="https://res.cloudinary.com/dahquiy48/image/upload/v1767375679/girls_calgary_drqnww.jpg" 
                alt="Calgary tournament"
              />
            </div>
          </div>
        </section>

        {/* ================= CANADA (OUT OF PROVINCE) ================= */}
        <section className="tournament-section">
          <div className="section-header">
            <h2>Canada · National Events</h2>
          </div>

          <div className="tournament-list">
            <div className="tournament-item">
              <span className="tournament-name">Jane and Finch Classic</span>
              <span className="tournament-date">Toronto, ON</span>
            </div>
            <div className="tournament-item">
              <span className="tournament-name">Basketball Nationals</span>
              <span className="tournament-date">British Columbia</span>
            </div>
          </div>
        </section>

        {/* ================= UNITED STATES ================= */}
        <section className="tournament-section">
          <div className="section-header">
            <h2>United States</h2>
          </div>

          <div className="tournament-list">
            <div className="tournament-item">
              <span className="tournament-name">Hype Her Hoops Cali Cup</span>
              <span className="tournament-date">California · Girls</span>
            </div>
            <div className="tournament-item">
              <span className="tournament-name">Las Vegas Live / U.S. Invitational Events</span>
              <span className="tournament-date">Nevada · Boys</span>
            </div>
          </div>

        </section>

        {/* ================= BOTTOM HERO IMAGE ================= */}
        <div className="tournament-hero-bottom">
          <img 
            src="https://res.cloudinary.com/dahquiy48/image/upload/v1767666268/girl-scream_xcxmkx.jpg" 
            alt="Team celebration"
          />
          <div className="hero-overlay">
            <p className="hero-text">play where it matters.</p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
