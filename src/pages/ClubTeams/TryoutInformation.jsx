import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../../css_files/TryoutInformation.css';

export default function TryoutInformation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="tryout-info-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="tryout-wrapper">

        {/* ================= HERO ================= */}
        <header className="tryout-hero">
          <div className="hero-content">
            <span className="tryout-date">February 21, 2026</span>
            <h1>Spring Club Tryouts</h1>
            <p className="hero-subtitle">
              Commonwealth Recreation Centre · Edmonton
            </p>
          </div>

          <div className="hero-images-layout">
            <img
              src="https://res.cloudinary.com/dahquiy48/image/upload/v1767375626/boys_group_highlight_dih4fc.jpg"
              alt="Next Up Hoops game action"
              className="hero-img-1"
            />
            <img
              src="https://res.cloudinary.com/dahquiy48/image/upload/v1767639418/girls-bench_pdshhj.jpg"
              alt="Next Up Hoops training session"
              className="hero-img-2"
            />
          </div>
        </header>

        {/* ================= INTRO ================= */}
        <section className="intro-section">
          <div className="intro-content">
            <p>
              Next Up Hoops will be holding Spring Season Club tryouts for boys and
              girls teams. Athletes are evaluated by age group in structured sessions
              focused on skill level, competitiveness, and overall fit within the program.
            </p>
            <p>
              Teams compete throughout the Spring season in league play and tournaments.
              Final roster selections are made following the evaluation sessions.
            </p>
            <div className="fee-box">
              <span className="fee-label">Tryout Fee</span>
              <span className="fee-amount">$15</span>
              <span className="fee-note">per player</span>
            </div>
          </div>
        </section>

        {/* ================= TRYOUT SCHEDULE ================= */}
        <section className="schedule-section">
          <h2>Tryout Schedule</h2>

          <div className="schedule-container">
            <div className="schedule-group">
              <div className="group-label">Boys</div>
              <div className="schedule-items">
                <div className="schedule-item">
                  <div className="item-header">
                    <span className="age-group">U13 – U15</span>
                    <span className="court-info">Court 1</span>
                  </div>
                  <div className="item-time">7:30 PM</div>
                  <div className="item-location">Commonwealth Rec Centre</div>
                </div>

                <div className="schedule-item">
                  <div className="item-header">
                    <span className="age-group">U16 – U17</span>
                    <span className="court-info">Court 2</span>
                  </div>
                  <div className="item-time">7:30 PM</div>
                  <div className="item-location">Commonwealth Rec Centre</div>
                </div>
              </div>
            </div>

            <div className="schedule-group">
              <div className="group-label">Girls</div>
              <div className="schedule-items">
                <div className="schedule-item">
                  <div className="item-header">
                    <span className="age-group">U15</span>
                    <span className="court-info">Court 1</span>
                  </div>
                  <div className="item-time">6:00 PM</div>
                  <div className="item-location">Commonwealth Rec Centre</div>
                </div>

                <div className="schedule-item">
                  <div className="item-header">
                    <span className="age-group">U17</span>
                    <span className="court-info">Court 2</span>
                  </div>
                  <div className="item-time">6:00 PM</div>
                  <div className="item-location">Commonwealth Rec Centre</div>
                </div>
              </div>
            </div>
          </div>

          <p className="arrival-reminder">
            <strong>Arrive 15 minutes early</strong> for check-in and warmups
          </p>
        </section>

        {/* ================= OPEN GYMS ================= */}
        <section className="open-gym-section">
          <h2>Open Gym Sessions</h2>
          <p className="section-subtitle">No registration required</p>

          <div className="open-gym-block">
            <div className="gym-header">
              <span className="gym-label">TBD</span>
            </div>
          </div>
        </section>

        {/* ================= AGE ELIGIBILITY ================= */}
        <section className="eligibility-section">
          <h2>Age Group Eligibility</h2>
          
          <div className="eligibility-list">
            <div className="eligibility-row">
              <span className="age">U13</span>
              <span className="divider"></span>
              <span className="birth">Born in 2013 or later</span>
            </div>
            <div className="eligibility-row">
              <span className="age">U14</span>
              <span className="divider"></span>
              <span className="birth">Born in 2012 or later</span>
            </div>

            <div className="eligibility-row">
              <span className="age">U15</span>
              <span className="divider"></span>
              <span className="birth">Born in 2011 or later</span>
            </div>
            <div className="eligibility-row">
              <span className="age">U16</span>
              <span className="divider"></span>
              <span className="birth">Born in 2010 or later</span>
            </div>
            <div className="eligibility-row">
              <span className="age">U17</span>
              <span className="divider"></span>
              <span className="birth">Born in 2009 or later</span>
            </div>
          </div>
        </section>

        {/* ================= ADDITIONAL INFO ================= */}
        <section className="additional-info">
          <p>
            Additional tryout sessions may be scheduled only if warranted by competitive 
            depth within an age group. All scheduling decisions are made at the discretion 
            of the coaching staff and will be communicated through official club channels.
          </p>
        </section>

        {/* ================= CTA ================= */}
        <section className="cta-section">
          <a
            href="https://registration.teamsnap.com/form/48542"
            className="register-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register for Tryouts
          </a>
        </section>

      </div>
    </motion.div>
  );
}