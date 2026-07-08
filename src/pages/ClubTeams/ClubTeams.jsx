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
      className="program-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="program-container">

        {/* HERO */}
        <section className="program-section">
          <span className="program-eyebrow">Fall 2026</span>
          <h1 style={{ fontSize: '3rem', fontWeight: 600, lineHeight: 1.15, margin: '0 0 1.5rem' }}>
            Continue What's Next.
          </h1>
          <p className="program-lead">
            The Spring/Summer club season may be over, but your development doesn't have to
            be. The Next Up Hoops Fall Program is designed to bridge the gap between the
            Spring/Summer club season and the school basketball season, providing athletes
            with the opportunity to continue training, competing, and improving in a
            structured, competitive environment.
          </p>
          <p className="program-lead">
            Whether you're preparing for your school season, looking to continue developing
            your game, or simply want to stay active throughout the Fall, our program is built
            to help athletes continue progressing while enjoying the game they love.
          </p>
          <p style={{ fontWeight: 600, letterSpacing: '0.02em' }}>What's Next Is Earned.</p>
        </section>

        {/* PHOTO STRIP */}
        <section className="program-section">
          <div className="hub-photo-strip">
            <img
              src="https://res.cloudinary.com/dahquiy48/image/upload/f_auto,q_auto,w_700/v1783538782/ovo_uizc32.jpg"
              alt="Next Up Hoops girls game action"
              loading="eager"
              fetchpriority="high"
            />
            <img
              src="https://res.cloudinary.com/dahquiy48/image/upload/f_auto,q_auto,w_700/v1783538782/mancoach_yfkvxb.jpg"
              alt="Next Up Hoops coach with players"
              loading="eager"
            />
            <img
              src="https://res.cloudinary.com/dahquiy48/image/upload/f_auto,q_auto,w_700/v1783538782/drib_olzs1h.jpg"
              alt="Next Up Hoops girls game action"
              loading="eager"
            />
          </div>
        </section>

        {/* WHY NEXT UP */}
        <section className="program-section">
          <h2>Why Next Up?</h2>
          <p>
            At Next Up Hoops, we believe development doesn't stop when one season ends. Our
            Fall Program combines structured weekly training, meaningful competition,
            experienced coaching, professional media, and a positive team environment to
            create an experience that goes beyond a typical basketball program.
          </p>
          <p>
            Every detail is designed to help athletes continue improving while preparing for a
            successful school basketball season.
          </p>
        </section>

        {/* THE NEXT UP DIFFERENCE */}
        <section className="program-section">
          <h2>The Next Up Difference</h2>
          <div className="included-grid">
            <div className="included-item">
              <h3>Structured Weekly Development</h3>
              <p>Continue building your game through consistent team practices focused on individual skill development, basketball IQ, and team concepts.</p>
            </div>
            <div className="included-item">
              <h3>Meaningful Competition</h3>
              <p>Apply what you learn each week through organized scrimmages and tournament competition in a structured game environment.</p>
            </div>
            <div className="included-item">
              <h3>Experienced Coaching</h3>
              <p>Train with coaches committed to helping athletes develop confidence, improve their skills, and reach their full potential.</p>
            </div>
            <div className="included-item">
              <h3>Professional Athlete Experience</h3>
              <p>From premium team apparel and organized programming to clear communication and a development-first culture, every aspect of the program is designed with athletes and families in mind.</p>
            </div>
          </div>
        </section>

        {/* NEXT UP STUDIOS */}
        <section className="program-section">
          <h2>Next Up Studios</h2>
          <p>
            Media has always been an important part of the Next Up Hoops experience.
            Beginning this Fall, all media operations will be led by Next Up Studios, our
            dedicated in-house media team.
          </p>
          <p>Throughout the season, athletes can expect:</p>
          <ul className="simple-list">
            <li>Official Team Media Day</li>
            <li>Team & Individual Photography</li>
            <li>Practice & Game-Day Coverage</li>
            <li>Player Features</li>
            <li>Social Media Content</li>
            <li>Behind-the-Scenes Coverage</li>
          </ul>
          <p>
            Our goal is to showcase every athlete's journey while creating lasting memories
            throughout the season.
          </p>
        </section>

        {/* FALL PROGRAMS */}
        <section className="program-section">
          <h2>Fall Programs</h2>
          <div className="hub-cards">
            <Link to="/ClubTeams/Fall-Boys" className="hub-card">
              <h3>Boys Fall Program</h3>
              <p>U13 • U14 • U15 • U16 • U17 • U18</p>
              <p>
                Continue developing through weekly practices, competitive scrimmages,
                tournament play, and experienced coaching while preparing for the upcoming
                school basketball season.
              </p>
              <span className="hub-card-arrow">View Boys Program →</span>
            </Link>

            <Link to="/ClubTeams/Fall-Girls" className="hub-card">
              <h3>Girls Fall Program</h3>
              <p>U15 • U16 • U17 • U18</p>
              <p>
                Continue developing in a competitive, positive, and supportive environment
                while preparing for the upcoming school basketball season.
              </p>
              <span className="hub-card-arrow">View Girls Program →</span>
            </Link>
          </div>
        </section>

        {/* FALL TRYOUTS */}
        <section className="program-section">
          <h2>Fall Tryouts</h2>
          <p>
            Every athlete interested in participating in the Fall Program is required to
            attend the Fall 2026 Tryouts. Our multi-step evaluation process provides every
            athlete with multiple opportunities to earn their place within the Next Up Hoops
            program.
          </p>
          <Link to="/ClubTeams/Fall-Tryouts">Learn More About Fall Tryouts →</Link>
        </section>

        {/* CTA */}
        <section className="program-section">
          <h2>Ready for Fall?</h2>
          <p>
            Join one of Edmonton's fastest-growing basketball programs and continue building
            your game this Fall.
          </p>
        </section>

        <section className="program-actions">
          <Link to="/ClubTeams/Fall-Tryouts">
            Register for Fall 2026
          </Link>
        </section>

      </div>
    </motion.div>
  );
}
