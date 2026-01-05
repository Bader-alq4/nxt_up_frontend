import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../css_files/ClubTeams.css';

export default function Spring2026Girls() {
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
          <h1 className="detail-title">Spring 2026 Girls Teams</h1>
          
          <p className="detail-intro">
            Our girls teams focus on skill development, leadership, and building a supportive 
            team environment. We offer competitive opportunities for various age groups, led by 
            experienced coaches passionate about empowering young athletes.
          </p>

          <div className="detail-section">
            <h2 className="detail-heading">Age Groups</h2>
            <ul className="detail-list">
              <li>15U Girls</li>
              <li>17U Girls</li>
            </ul>
          </div>

          <div className="detail-section">
            <h2 className="detail-heading">What's Included</h2>
            <ul className="detail-list">
              <li>2 practices per week</li>
              <li>2 tournaments</li>
              <li>Team gear and uniforms included</li>
              <li>Emphasis on personal growth and teamwork</li>
              <li>Elite coaching and player development</li>
            </ul>
          </div>

          <div className="detail-section">
            <h2 className="detail-heading">Program Details</h2>
            <p className="detail-text">
              Our Spring 2026 program prepares athletes for the next level with elite instruction 
              and regional showcases. We create a positive, competitive environment where athletes 
              can develop their skills and build confidence.
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

