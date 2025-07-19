// src/components/Testimonials.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css_stuff/Testimonials.css';

export default function Testimonials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="testimonials-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="testimonials-container">
        <h1 className="testimonials-heading">TESTIMONIALS</h1>
        <p className="testimonials-intro">
          We're collecting feedback from our athletes, families, and community members who've experienced the Next Up difference.
        </p>

        {/* <div className="testimonials-list">
          <div className="testimonial-card">
            <p className="testimonial-text">"Next Up Hoops gave my son the confidence and skills to excel both on and off the court. The coaches truly care!"</p>
            <div className="testimonial-author">— Parent</div>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">"I made lifelong friends and learned what it means to be a leader. Best basketball experience ever."</p>
            <div className="testimonial-author">— Athlete</div>
          </div>

          <div className="testimonial-card">
            <p className="testimonial-text">"Proud to support a club that puts community and character first. Highly recommended for sponsors!"</p>
            <div className="testimonial-author">— Sponsor</div>
          </div>
        </div> */}

        <div className="testimonials-footer">Testimonial section coming soon.</div>
      </div>

      {/* Extra space to make the page feel longer */}
      <div className="testimonials-spacer"></div>
    </motion.div>
  );
}
