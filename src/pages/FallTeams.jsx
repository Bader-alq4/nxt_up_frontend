// src/pages/FallTeams.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css_stuff/FallTeams.css';

export default function FallTeams() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="fall-teams-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="fall-teams-container">
        {/* Main Season Intro */}
        <h1 className="fall-teams-heading">NEXT UP Elite Fall 2025 Season</h1>
        <p className="fall-teams-age-range">
          Our Fall club programming runs through September and October 2025, giving athletes a chance to train and compete at a high level before the school season begins.
        </p>

        {/* Teams Offered */}
        <h2 className="fall-teams-subheading">Teams Offered</h2>
        <ul className="fall-teams-list">
          <li>Boys: 15U, 16U, 17U</li>
          <li>Girls: Two teams (ages 15–17)</li>
        </ul>

        {/* Tournament Schedule */}
        <h2 className="fall-teams-subheading">Boys Tournament Schedule</h2>
        <ul className="fall-teams-list">
          <li>Edge International Invitational – Calgary, AB (End of September 2025, Dates TBD)</li>
          <li>Good Hoops Fall Classic – Edmonton, AB (October 2025, Dates TBD)</li>
          <li>Each tournament includes 3–5 games.</li>
        </ul>

        {/* What’s Included */}
        <h2 className="fall-teams-subheading">What’s Included (All Teams)</h2>
        <ul className="fall-teams-list">
          <li>Tournament or exhibition play depending on team</li>
          <li>2 practices/training sessions per week (Details TBD)</li>
          <li>Exhibition games</li>
          <li>Team gear package</li>
          <li>Hotel accommodations included for Calgary tournament</li>
          <li>Hotel block available for parents/guardians</li>
          <li>Transportation to/from Calgary and between hotel and games is the athlete’s responsibility</li>
        </ul>

        {/* Separator */}
        <hr className="fall-teams-hr" />

        {/* Tryouts and Cost */}
        <p className="fall-teams-tryouts"><strong>Tryouts:</strong> Early August</p>
        <p className="fall-teams-note">
          Details and registration links released prior to season start.
        </p>

        {/* Additional Season Details */}
        <hr className="fall-teams-hr" />
        <p className="fall-teams-tryouts"><strong>Cost:</strong> $950 per athlete</p>
        <p className="fall-teams-note">
          Full payment is due August 18, 2025. Payment must be made in full unless you’ve contacted us in advance. Missed payment without notice will result in removal from the team without warning.
        </p>

        {/* Registration & Questions */}
        <hr className="fall-teams-hr" />
        <h2 className="fall-teams-subheading">Registration</h2>
        <p className="fall-teams-note">
          Athletes who make a team will receive a TeamSnap registration link after evaluations.
        </p>

        <h2 className="fall-teams-subheading">Questions?</h2>
        <p className="fall-teams-note">
          We work to remove financial barriers so all athletes can compete. Email us at{' '}
          <a href="mailto:admin@nextuphoops.ca" className="fall-link">
            admin@nextuphoops.ca
          </a> with any questions.
        </p>
      </div>
    </motion.div>
  );
}
