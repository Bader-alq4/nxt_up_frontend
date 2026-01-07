import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css_files/About.css';

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
      {/* HERO */}
      <div className="about-hero">
        <div className="about-hero-image">
          <img
            src="https://res.cloudinary.com/dahquiy48/image/upload/v1767375628/coach_edoawv.jpg"
            alt="Next Up Hoops founder"
          />
        </div>
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>About Next Up Hoops</h1>
          <p>
            Founded in Edmonton, Alberta by Yassir Madih. Built for athletes who were
            overlooked, underfunded, or underestimated — but committed to putting in
            the work.
          </p>
        </div>
      </div>

      {/* INTRO */}
      <section className="about-intro">
        <div className="intro-content">
          <p className="intro-lead">
            Next Up Hoops is a development-focused basketball program built for athletes
            committed to long-term improvement and competitive growth.
          </p>
        </div>
      </section>

      {/* PROGRAM OVERVIEW */}
      <section className="about-mission">
        <div className="mission-grid">
          <div className="mission-image">
            <img
              src="https://res.cloudinary.com/dahquiy48/image/upload/v1767375694/team_q5kqhc.jpg"
              alt="Next Up team"
            />
          </div>

          <div className="mission-text">
            <h2>Program Overview</h2>
            <p>
              This season represents a full reset for Next Up Hoops. The program has been
              rebuilt from the ground up with a clear objective: to operate as a long-term
              development partner, not a short-term or seasonal team.
            </p>
            <p>
              Coaching systems, development pathways, communication, media, and travel
              planning have all been redesigned to create a more consistent and
              professional experience. The Spring season is one part of a
              broader year-round approach to athlete development.
            </p>
            <p>
              Rosters are intentionally capped at 12–13 players per team to protect
              coaching quality, individual development, and team chemistry. Tryouts are
              competitive, and not all athletes will be selected.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="about-mission">
        <div className="mission-grid">
          <div className="mission-text">
            <h2>Program Philosophy</h2>
            <p>
              Next Up is built on structure, clarity, and consistency. Athlete development
              does not happen in short bursts — it happens over time through clear
              expectations, reliable coaching, and meaningful training environments.
            </p>
            <p>
              Our role extends beyond practices and tournaments. We support athletes
              through skill development, confidence building, accountability, exposure,
              and guidance as they progress through different stages of their basketball
              journey.
            </p>
          </div>

          <div className="mission-image">
            <img
              src="https://res.cloudinary.com/dahquiy48/image/upload/v1767375694/team_q5kqhc.jpg"
              alt="Team development"
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values" id="why-choose-us">
        <div className="values-header">
          <h2>What Makes Us Different</h2>
          <p>
            We focus on how athletes develop over time — not just how teams perform in
            individual games.
          </p>
        </div>

        <div className="values-grid">
          <div className="value-item">
            <h3>Structured Development</h3>
            <p>
              Practices, training, and competition are planned with long-term progression
              in mind.
            </p>
          </div>

          <div className="value-item">
            <h3>Intentional Roster Sizes</h3>
            <p>
              Smaller rosters allow for meaningful coaching, clear roles, and real
              development.
            </p>
          </div>

          <div className="value-item">
            <h3>Consistent Coaching Standards</h3>
            <p>
              Athletes are held to clear expectations for effort, accountability, and
              professionalism.
            </p>
          </div>

          <div className="value-item">
            <h3>Complete Program Experience</h3>
            <p>
              Practices, additional training, team culture, media, and travel are treated
              as connected parts of one system.
            </p>
          </div>

          <div className="value-item">
            <h3>Clear Communication & Planning</h3>
            <p>
              Expectations, schedules, and commitments are communicated clearly so families
              understand how the season is structured.
            </p>
          </div>

          <div className="value-item">
            <h3>Long-Term Perspective</h3>
            <p>
              Decisions are made with the athlete’s development over multiple seasons in
              mind — not short-term outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSER */}
      <section className="about-closer">
        <div className="closer-content">
          <p className="closer-primary">Prep. High school. Post-secondary.</p>
          <p className="closer-secondary">
            If that’s where you’re headed, this is where the work begins.
          </p>
        </div>
      </section>
    </motion.div>
  );
}
