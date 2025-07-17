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
          <h1 className="tryout-info-title">2025 Fall Club Team<br />Tryout Registration</h1>

          <p className="tryout-info-desc">
            2025 Fall Club Tryouts will be held in August for both the Boys and the Girls teams.
          </p>

          <div className="tryout-info-section">
            <h3 className="tryout-info-date-heading">Tryouts - Saturday, August 2nd, 2025</h3>
            <ul className="tryout-info-list">
              <li>Boys 15U/16U - 1:00PM to 2:30PM @ Saville</li>
              <li>Boys 17U/18U - 2:30PM to 4:30PM @ Saville</li>
            </ul>
          </div>

          <div className="tryout-info-section">
            <h3 className="tryout-info-date-heading">Open Gym (No registration required) - Tuesday, August 5th, 2025</h3>
            <ul className="tryout-info-list">
              <li>Girls 15U/17U - 7:00PM to 9:00 PM @ Central Lions Rec Centre</li>
            </ul>
          </div>

          <div className="tryout-info-section">
            <h3 className="tryout-info-date-heading">Open Gym (No registration required) - Wedneday, August 13th, 2025</h3>
            <ul className="tryout-info-list">
              <li>Girls 15U/17U - 4:00PM to 6:00 PM @ Commonwealth Rec Centre</li>
            </ul>
          </div>



          <div className="tryout-info-section">
            <h3 className="tryout-info-date-heading">Tryouts - Tuesday, August 19th, 2025</h3>
            <ul className="tryout-info-list">
              <li>Girls 15U/17U - 6:00PM to 8:00 PM @ Central Lions Rec Centre</li>
            </ul>
          </div>


          <div className="tryout-info-section">
            <p className="tryout-info-note">Please arrive 20 minutes before your scheduled tryout for check-in.</p>
          </div>

          <div className="tryout-info-section">
            <p className="tryout-info-desc">
              There will be no option for in-person registration.
            </p>
          </div>

          <div className="tryout-info-section">
            <h3 className="tryout-info-date-heading">Age Group Clarification:</h3>
            <ul className="tryout-info-list">
              <li>11 - Born in 2014</li>
              <li>12 - Born in 2013</li>
              <li>13 - Born in 2012</li>
              <li>14 - Born in 2011</li>
              <li>15 - Born in 2010</li>
              <li>16 - Born in 2009</li>
              <li>17 - Born in 2008</li>
              <li>18 - Born in 2007</li>
            </ul>
          </div>

          <div className="tryout-info-section">
            <Link to="/register">
              <button className="tryout-info-register-btn">Register for Tryouts</button>
            </Link>
          </div>

          <Link to="/FallTeams">
            <button className="tryout-info-btn">Back to Fall Teams</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
