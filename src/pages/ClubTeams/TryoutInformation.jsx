import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
      <div className="tryout-info-header">
        <h1>Spring 2026 Club Tryouts</h1>

        <div className="tryout-intro-wide">
            <p>
            We offer Club teams for girls and boys from 13U to 18U during the Spring and
            Summer seasons. Teams are formed through tryouts and selective invitations,
            depending on age group and roster needs.
            </p>

            <p>
            Teams train on a regular schedule and compete in local and regional tournaments,
            with some teams participating in out-of-province events based on age group and
            competitive level. Tournament schedules and travel expectations vary by team.
            </p>
        </div>
        </div>


      <div className="tryout-columns">
        {/* ================= GIRLS ================= */}
        <div className="tryout-column">
          <Link
            to="/ClubTeams/Spring-2026-Girls"
            className="program-badge program-link"
          >
            Girls Program Info
          </Link>

          <h2>Girls Tryouts – Edmonton & Calgary</h2>

          <h3>Edmonton – Club</h3>
          <p className="location-date">
            <strong>Saturday, January 10, 2026</strong> – Edmonton Sports Centre (9880 47 Ave)
          </p>

          <ul>
            <li><strong>10:00 AM – 12:00 PM</strong> – 11U Girls (2015+)</li>
            <li><strong>10:00 AM – 12:00 PM</strong> – 13U Girls (2013+)</li>
            <li><strong>12:15 PM – 2:15 PM</strong> – 15U Girls (2011+)</li>
            <li><strong>2:30 PM – 4:30 PM</strong> – 16U / 17U / 18U Girls (2007+)</li>
          </ul>

          <p className="location-date">
            <strong>Sunday, January 11, 2026</strong> – Edmonton Sports Centre (9880 47 Ave)
          </p>

          <ul>
            <li><strong>10:00 AM – 12:00 PM</strong> – 11U Girls</li>
            <li><strong>10:00 AM – 12:00 PM</strong> – 13U Girls</li>
            <li><strong>12:15 PM – 2:15 PM</strong> – 15U Girls</li>
            <li><strong>2:30 PM – 4:30 PM</strong> – 16U / 17U / 18U Girls</li>
          </ul>

          <h3>Calgary – Club</h3>
          <p className="location-date">
            <strong>Saturday, January 17, 2026</strong> – RISE Sports Complex
          </p>

          <ul>
            <li><strong>3:30 PM – 5:00 PM</strong> – 15U Girls</li>
            <li><strong>5:00 PM – 6:30 PM</strong> – 16U / 17U / 18U Girls</li>
          </ul>

          <p className="tryout-fee">Tryout Fee: $25 + GST</p>
        </div>

        {/* ================= BOYS ================= */}
        <div className="tryout-column">
          <Link
            to="/ClubTeams/Spring-2026-Boys"
            className="program-badge program-link"
          >
            Boys Program Info
          </Link>

          <h2>Boys Tryouts</h2>

          <h3>Edmonton – Club</h3>
          <p className="location-date">
            <strong>Saturday, January 17, 2026</strong> – Edmonton Sports Centre (9880 47 Ave)
          </p>

          <ul>
            <li><strong>10:00 AM – 12:00 PM</strong> – 11U Boys (2015+)</li>
            <li><strong>10:00 AM – 12:00 PM</strong> – 13U Boys (2013+)</li>
            <li><strong>12:15 PM – 2:15 PM</strong> – 15U Boys (2011+)</li>
            <li><strong>2:30 PM – 4:30 PM</strong> – 16U / 17U / 18U Boys (2007+)</li>
          </ul>

          <p className="location-date">
            <strong>Sunday, January 18, 2026</strong> – Edmonton Sports Centre (9880 47 Ave)
          </p>

          <ul>
            <li><strong>10:00 AM – 12:00 PM</strong> – 11U Boys</li>
            <li><strong>10:00 AM – 12:00 PM</strong> – 13U Boys</li>
            <li><strong>12:15 PM – 2:15 PM</strong> – 15U Boys</li>
            <li><strong>2:30 PM – 4:30 PM</strong> – 16U / 17U / 18U Boys</li>
          </ul>

          <p className="tryout-fee">Tryout Fee: $25 + GST</p>

          <p className="important-note">
            <strong>Important:</strong> Arrive 30 minutes prior to your scheduled time.
          </p>

          <p className="muted-note">
            Calgary Boys Tryouts – TBA
          </p>
        </div>
      </div>
    </motion.div>
  );
}
