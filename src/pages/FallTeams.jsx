import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css_stuff/FallTeams.css';

export default function FallTeams() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="fall-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="fall-container">
        {/* Intro Section */}
        <section className="fall-section fall-intro-section">
          <div className="fall-intro-text">
            <h1 className="fall-title">Fall Club Basketball</h1>
            <p className="fall-paragraph">
              Our Next Up Elite Teams are designed to give athletes access to high-level coaching, structured growth, and elite competition. Every season is thoughtfully designed to provide athletes with the tools, reps, and exposure they need to reach the next level no matter where they start.
            </p>
          </div>
        </section>

        {/* Girls Teams Section */}
        <section className="fall-section fall-girls-section">
          <div className="fall-section-image">
            <img src="https://res.cloudinary.com/dahquiy48/image/upload/v1767375664/fall_teams_girls_meztlu.jpg" alt="Girls Basketball Team" />
          </div>
          <div className="fall-section-text">
            <h2 className="fall-section-title">Girls Teams</h2>
            <p className="fall-paragraph">
              Our girls teams focus on skill development, leadership, and building a supportive team environment. We offer competitive opportunities for various age groups, led by experienced coaches passionate about empowering young athletes.
            </p>
            <ul className="fall-section-list">
              <li>Age groups: 15U, 17U</li>
              <li>2 practices per week</li>
              <li>2 tournaments</li>
              <li>Team gear and uniforms included</li>
              <li>Emphasis on personal growth and teamwork</li>
            </ul>
            <Link to="/FallTeams/Girls">
              <button className="fall-section-btn">Explore Girls Teams</button>
            </Link>
          </div>
        </section>

        {/* Boys Teams Section — copied structure from Girls Section */}
        <section className="fall-section fall-boys-section">
          <div className="fall-section-image">
            <img src="https://res.cloudinary.com/dahquiy48/image/upload/v1767375664/fall_teams_boys_iqm6uj.jpg" alt="Boys Basketball Team" />
          </div>
          <div className="fall-section-text">
            <h2 className="fall-section-title">Boys Teams</h2>
            <p className="fall-paragraph">
              Our boys teams are designed for athletes who want to compete, improve, and grow as leaders on and off the court. We provide a challenging and positive environment for all skill levels.
            </p>
            <ul className="fall-section-list">
              <li>Age groups: 15U, 16U, 17U, 18U</li>
              <li>2 practices per week</li>
              <li>2 tournaments</li>
              <li>Team gear and uniforms included</li>
              <li>Focus on skill, strategy, and sportsmanship</li>
            </ul>
            <Link to="/FallTeams/Boys">
              <button className="fall-section-btn">Explore Boys Teams</button>
            </Link>
          </div>
        </section>

      </div>
    </motion.div>
  );
}
