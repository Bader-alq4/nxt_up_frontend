import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css_stuff/About.css';

export default function About() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, [location]);

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="about-hero">
        <div className="about-hero-image">
          <img src="https://res.cloudinary.com/dahquiy48/image/upload/v1767375628/coach_edoawv.jpg" alt="" />
        </div>
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>About Next Up Hoops</h1>
          <p>Founded in Edmonton, Alberta by Yassir Madih. Built for players who were overlooked, underfunded, and underestimated — but never stopped working.</p>
        </div>
      </div>

      <section className="about-intro">
        <div className="intro-content">
          <p className="intro-lead">
            A program built for athletes who are serious about their development, and ready to compete at the next level.
          </p>
        </div>
      </section>

      <section className="about-mission" id="mission">
        <div className="mission-grid">
          <div className="mission-image">
            <img src="https://res.cloudinary.com/dahquiy48/image/upload/v1767375694/team_q5kqhc.jpg" alt="" />
          </div>
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              We've seen too many talented athletes priced out of opportunity. At Next Up Hoops, we believe that skill and discipline should never be limited by finances or access.
            </p>
            <p>
              Our mission is to provide elite-level coaching, professional exposure, and a player-first culture that combines accountability with care. We're changing youth basketball by creating pathways for athletes who deserve a chance — and are willing to earn it.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values" id="why-choose-us">
        <div className="values-header">
          <h2>What Makes Us Different</h2>
          <p>We don't do polish for the sake of appearances. We do the work that matters.</p>
        </div>
        <div className="values-grid">
          <div className="value-item">
            <h3>Elite Coaching</h3>
            <p>High-quality instruction from proven mentors who prioritize character development alongside basketball skills.</p>
          </div>
          <div className="value-item">
            <h3>Real Playing Time</h3>
            <p>Smaller roster sizes ensure every player gets meaningful minutes and genuine development opportunities.</p>
          </div>
          <div className="value-item">
            <h3>Detailed Evaluations</h3>
            <p>Monthly growth reports and feedback sessions so players and families know exactly where they stand.</p>
          </div>
          <div className="value-item">
            <h3>Strategic Tournaments</h3>
            <p>Top-tier competition with intentional scheduling. We play where it counts.</p>
          </div>
          <div className="value-item">
            <h3>Accountability Culture</h3>
            <p>Leadership, discipline, and accountability aren't optional here — they're expected.</p>
          </div>
          <div className="value-item">
            <h3>Professional Media</h3>
            <p>Quality coverage and branding that showcases your work when you earn it.</p>
          </div>
        </div>
      </section>

      <section className="about-closer">
        <div className="closer-content">
          <p className="closer-primary">Prep. High school. Post-secondary.</p>
          <p className="closer-secondary">If that's where you're headed, this is where you start.</p>
        </div>
      </section>
    </motion.div>
  );
}