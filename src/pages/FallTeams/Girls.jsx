import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../css_stuff/FallTeams.css';

export default function FallTeamsGirls() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="fall-detail-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="fall-detail-container">
        <div className="fall-detail-content">
          <div className="fall-detail-text">
            <h1 className="fall-detail-title">Fall Girls Teams</h1>
            
            <div className="fall-detail-section">
              <h3 className="fall-detail-heading">Eligibility</h3>
              <p>Age groups: 15U, 17U</p>
            </div>

            <div className="fall-detail-section">
              <h3 className="fall-detail-heading">Practice Schedule</h3>
              <p>2 practices/training sessions per week</p>
            </div>

            <div className="fall-detail-section">
              <h3 className="fall-detail-heading">Tournament Schedule</h3>
              <p>Edge International Invitational – Calgary, AB (September 19 - 21)</p>
              <p>Good Hoops Fall Classic – Edmonton, AB (October 17 - 19)</p> 
              <p>Each tournament includes 3–5 games</p>
            </div>

            <div className="fall-detail-section">
              <h3 className="fall-detail-heading">Program Cost</h3>
              <p><strong>$750 per athlete</strong></p>
            </div>

            <div className="fall-detail-section">
              <h3 className="fall-detail-heading">What's Included</h3>
              <ul className="fall-detail-list">
                <li>Exhibition games against elite clubs and prep schools.</li>
                <li>Full uniform and training gear package</li>
                <li>Hotel accommodations included for Calgary tournament</li>
                <li>Media coverage and in-season highlights</li>
                <li>Parent/guradian hotel blocks provided for out-of-town events</li>
                <li>Focused rosters for more reps and coach attention</li>
                <li><strong>Transportation to/from Calgary and between hotel and games is the athlete’s responsibility</strong></li>
              </ul>
            </div>

            <div className="fall-detail-section">
              <h3 className="fall-detail-heading">Financial Support</h3>
              <p>We work to remove financial barriers so all athletes can compete. Email us at admin@nextuphoops.ca with any questions.</p>
            </div>

            <div className="fall-detail-section">             <Link to="/tryout-information">
                <button className="fall-detail-register-btn">Team Registration</button>
              </Link>
            </div>

            <Link to="/FallTeams">
              <button className="fall-detail-btn">Back to Fall Teams</button>
            </Link>
          </div>
          
          <div className="fall-detail-image">
            <img src="https://res.cloudinary.com/dahquiy48/image/upload/v1767375627/camps_rgyuvf.jpg" alt="Girls Basketball Team" />
          </div>
        </div>
      </div>
    </motion.div>
  );
} 