import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css_files/Sponsorship.css'; 

export default function SupportPartners() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="partner-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="partner-container">
        <p className="partner-eyebrow">Community Partnerships</p>
        <h1 className="partner-heading">Sponsorship Opportunities</h1>
        <p className="partner-intro">
          Partner with Next Up Hoops to support high-quality basketball events, reduce
          barriers for families, and put your brand in front of athletes, parents, coaches,
          and community supporters.
        </p>

        <div className="partner-feature-grid">
          <div className="partner-feature-card">
            <span className="partner-card-label">Upcoming Tournament</span>
            <h2>Next Up Fall Invitational</h2>
            <p>
              Sponsorship opportunities are available for our upcoming Fall Invitational,
              including event visibility, on-site recognition, digital promotion, and
              community-facing brand placement.
            </p>
          </div>

          <div className="partner-feature-card">
            <span className="partner-card-label">Spring Event</span>
            <h2>Next Up Spring Invitational</h2>
            <p>
              Partners can also support the Spring Invitational as we continue building a
              polished tournament experience for athletes, families, and visiting programs.
            </p>
          </div>
        </div>

        <div className="partner-section-grid">
          <section>
            <h2 className="partner-subheading">Sponsorship can support</h2>
            <ul className="partner-list">
              <li className="partner-list-item">Tournament operations, awards, and athlete experience</li>
              <li className="partner-list-item">Lower program costs for families in need</li>
              <li className="partner-list-item">Training equipment, gear, uniforms, and shoes</li>
              <li className="partner-list-item">Access for underserved schools and communities</li>
            </ul>
          </section>

          <section>
            <h2 className="partner-subheading">Partner benefits</h2>
            <ul className="partner-list">
              <li className="partner-list-item">Recognition across event, web, and social channels</li>
              <li className="partner-list-item">Brand visibility with local basketball families</li>
              <li className="partner-list-item">Tailored packages for your goals and budget</li>
              <li className="partner-list-item">Clear community impact and sponsor acknowledgement</li>
            </ul>
          </section>
        </div>

        <p className="partner-contact">
          Interested in sponsoring an upcoming Next Up event? Email{' '}
          <a href="mailto:info@nextuphoops.ca" className="partner-link">
            info@nextuphoops.ca
          </a>.
        </p>
      </div>
    </motion.div>
  );
}
