import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css_stuff/TryoutInformation.css';

export default function TryoutInformation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="tryout-info-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="tryout-info-wrapper">
        <div className="tryout-info-text">
          <h1 className="tryout-info-title">
            2025 Fall Club Team<br />Tryout Registration
          </h1>

          <p className="tryout-info-desc">
            2025 Fall Club Tryouts will be held in August for both the Boys and the Girls teams.
          </p>

          {/* Tryouts Section */}
          <div className="tryout-info-section">
            <h3 className="tryout-section-heading">Tryouts</h3>

            <h4 className="tryout-info-date-subheading">Boys 15U/16U</h4>
            <ul className="tryout-info-list">
              <li>Saturday, August 2nd, 2025 – 1:00PM to 2:30PM @ Saville, Court 1</li>
              <li>Saturday, August 9th, 2025 – 1:00PM to 2:30PM @ Saville, Court 1</li>
            </ul>

            <h4 className="tryout-info-date-subheading">Boys 17U/18U</h4>
            <ul className="tryout-info-list">
              <li>Saturday, August 2nd, 2025 – 2:30PM to 4:00PM @ Saville, Court 3</li>
              <li>Saturday, August 9th, 2025 – 2:30PM to 4:00PM @ Saville, Court 3</li>
            </ul>

            <h4 className="tryout-info-date-subheading">Girls 15U/17U</h4>
            <ul className="tryout-info-list">
            <li>Wednesday, August 13th, 2025 – 4:00PM to 6:00PM @ Commonwealth Rec Centre</li>
              <li>Tuesday, August 19th, 2025 – 6:00PM to 8:00PM @ Central Lions Rec Centre</li>
            </ul>
          </div>

          {/* Open Gym Section */}
          <div className="tryout-info-section">
            <h3 className="tryout-section-heading">Open Gyms (No registration required)</h3>

            <h4 className="tryout-info-date-subheading">Girls 15U/17U</h4>
            <ul className="tryout-info-list">
              <li>Tuesday, August 5th, 2025 – 7:00PM to 9:00PM @ Central Lions Rec Centre</li>
            </ul>
          </div>

          {/* Notes */}
          <div className="tryout-info-section">
            <p className="tryout-info-note">
              Please arrive 20 minutes before your scheduled tryout for check-in.
            </p>
            <p className="tryout-info-desc">
              There will be no option for in-person registration.
            </p>
          </div>

          {/* Age Group Clarification */}
          <div className="tryout-info-section">
            <h3 className="tryout-section-heading">Age Group Clarification</h3>
            <ul className="tryout-info-list">
              <li>13 – Born in 2012</li>
              <li>15 – Born in 2010</li>
              <li>16 – Born in 2009</li>
              <li>17 – Born in 2008</li>
              <li>18 – Born in 2007</li>
            </ul>
          </div>

          {/* Registration Button */}
          <div className="tryout-info-section">
            <Link to="/register">
              <button className="tryout-info-register-btn">Register for Tryouts</button>
            </Link>
          </div>

          {/* Back Button */}
          <Link to="/FallTeams">
            <button className="tryout-info-btn">Back to Fall Teams</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
