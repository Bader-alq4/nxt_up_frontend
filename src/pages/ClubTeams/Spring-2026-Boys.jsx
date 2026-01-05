import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../css_files/ClubTeams.css';

export default function Spring2026Boys() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="club-teams-detail-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="club-teams-detail-container">
        <div className="detail-content">
          <h1 className="detail-title">Spring 2026 Boys Teams</h1>
          
          <p className="detail-intro">
            Our boys teams are designed for athletes who want to compete, improve, and grow as 
            leaders on and off the court. We provide a challenging and positive environment for 
            all skill levels.
          </p>

          <div className="detail-section">
            <h2 className="detail-heading">Age Groups</h2>
            <ul className="detail-list">
              <li>13U Boys</li>
              <li>14U Boys</li>
              <li>15U Boys</li>
              <li>16U Boys</li>
              <li>17U Boys</li>
              <li>18U Boys</li>
            </ul>
          </div>

          <div className="detail-section">
            <h2 className="detail-heading">What's Included</h2>
            <ul className="detail-list">
              <li>2 practices per week</li>
              <li>2 tournaments</li>
              <li>Team gear and uniforms included</li>
              <li>Focus on skill, strategy, and sportsmanship</li>
              <li>Elite coaching and player development</li>
            </ul>
          </div>

          <div className="detail-section">
            <h2 className="detail-heading">Program Details</h2>
            <p className="detail-text">
              Our Spring 2026 program focuses on preparing athletes for the next level with 
              elite instruction and regional showcases. We emphasize skill development, 
              competitive play, and character building.
            </p>
          </div>

          <div className="detail-actions">
            <Link to="/ClubTeams/Tryouts" className="detail-btn-primary">
              View Tryout Information
            </Link>
            <Link to="/ClubTeams" className="detail-btn-secondary">
              Back to Club Teams
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

