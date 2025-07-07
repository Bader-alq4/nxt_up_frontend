// src/pages/SpringTeams.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css_stuff/SpringTeams.css';

export default function SpringTeams() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="spring-teams-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="spring-teams-container">
        <h1 className="spring-teams-heading">
          SPRING/SUMMER SEASON <span className="spring-teams-age-range">(13U–18U)</span>
        </h1>
        <p className="spring-teams-subheading">April - Early July</p>

        <p className="spring-teams-description">
          Our premier season — tailored for high exposure, strategic travel, and long-term development.
        </p>

        <ul className="spring-teams-list">
          <li>2 team practices or training sessions per week</li>
          <li>5–6 total tournaments per team, including 2 out-of-town tournaments</li>
          <li>Weekly league play for 13U and 15U</li>
          <li>Exhibition games and internal scrimmages</li>
          <li>Media day, photo/video coverage, and in-game highlights</li>
          <li>Monthly player report cards with personalized coaching feedback</li>
          <li>Team gear and custom uniforms</li>
          <li>Accommodation provided for out-of-town tournaments</li>
          <li>Discounted hotel blocks for parents and families</li>
          <li>Skill-based team placement to ensure competitive balance</li>
          <li>Optional recruiting support for high school seniors</li>
          <li>Smaller rosters, detailed game planning, and accountability systems</li>
        </ul>

        <hr className="spring-teams-hr" />

        <p className="spring-teams-note">
          <strong>Note:</strong> Out-of-town tournaments can include out-of-province or U.S. travel, depending on age group and competition level. These vary by team and season and are announced before each program opens. All tournament schedules, tryout dates, and registration links will be released on our website and social media prior to each season.
        </p>

        <p className="spring-teams-tryouts"><strong>Tryouts:</strong> Late January</p>
      </div>
    </motion.div>
  );
}