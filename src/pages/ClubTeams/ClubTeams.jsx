import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../css_files/ClubTeams.css';

export default function ClubTeams() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="club-teams-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* HERO */}
      <section className="club-hero">
        <div className="club-hero-content">
          <h1>Club Teams</h1>
          <p>
            We offer Club teams for girls and boys ages 13U–18U during the Spring and
            Summer seasons. Teams are formed through tryouts and compete in local,
            regional, and select out-of-province tournaments.
          </p>
        </div>
      </section>

      {/* SPRING 2026 */}
      <section className="club-season">
        <div className="club-season-header">
          <h2>Spring 2026</h2>
          <span className="season-status">Registration Open</span>
        </div>

        <div className="club-cards">
          <Link to="/ClubTeams/Spring-2026-Boys" className="club-card boys">
            <div className="club-card-overlay" />
            <div className="club-card-content">
              <h3>Boys Teams</h3>
              <p>
                Club teams across multiple age groups with a structured practice and
                tournament schedule.
              </p>
              <span>View Boys Teams →</span>
            </div>
          </Link>

          <Link to="/ClubTeams/Spring-2026-Girls" className="club-card girls">
            <div className="club-card-overlay" />
            <div className="club-card-content">
              <h3>Girls Teams</h3>
              <p>
                Competitive club opportunities with consistent training and
                age-appropriate tournament play.
              </p>
              <span>View Girls Teams →</span>
            </div>
          </Link>

          <Link to="/ClubTeams/Tryouts" className="club-card tryouts">
            <div className="club-card-overlay" />
            <div className="club-card-content">
              <h3>Tryout Information</h3>
              <p>
                Full details on tryout dates, locations, and registration for Spring 2026.
              </p>
              <span>View Tryouts →</span>
            </div>
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
