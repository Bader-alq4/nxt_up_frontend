import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css_files/ClubTeams.css';
import '../css_files/RunClub.css';

const SIGNUP_URL = 'https://registration.teamsnap.com/form/63099';

const sessions = [
  { date: 'Aug 4',  location: 'Kinsmen Park / Walterdale Area' },
  { date: 'Aug 6',  location: 'Terwillegar Park' },
  { date: 'Aug 11', location: 'Mill Creek Ravine' },
  { date: 'Aug 13', location: 'Capilano Park' },
  { date: 'Aug 18', location: 'Gallagher Park (Hill Session)' },
  { date: 'Aug 20', location: 'Gold Bar Park' },
  { date: 'Aug 25', location: 'Kinsmen Park (Competition Day)' },
  { date: 'Aug 27', location: 'Hawrelak Park (Final Session)' },
];

const heroPhotos = [
  {
    src: 'https://res.cloudinary.com/dahquiy48/image/upload/v1778106829/path_r9l1or.webp',
    alt: 'River valley trail',
  },
  {
    src: 'https://res.cloudinary.com/dahquiy48/image/upload/v1778106408/stairs_abtbu7.webp',
    alt: 'Stairs training area',
  },
];

const locationPhotos = [
  {
    src: 'https://res.cloudinary.com/dahquiy48/image/upload/v1778107575/mill-creek_rnesxy.webp',
    label: 'Mill Creek',
    alt: 'Whitemud Creek ravine view',
  },
  {
    src: 'https://res.cloudinary.com/dahquiy48/image/upload/v1778107416/Edmonton_River-Valley_Stairs_oolqwi.jpg',
    label: 'River Valley',
    alt: 'Edmonton river valley',
  },
  {
    src: 'https://res.cloudinary.com/dahquiy48/image/upload/v1778106407/Terwillegar_uhtoma.webp',
    label: 'Terwillegar',
    alt: 'Terwillegar Park trail',
  },
  {
    src: 'https://res.cloudinary.com/dahquiy48/image/upload/v1778107640/kinsemen-park_eenrrm.jpg',
    label: 'Kinsmen Park',
    alt: 'Kinsmen Park trail',
  },
  {
    src: 'https://res.cloudinary.com/dahquiy48/image/upload/v1778107867/-William-Hawrelak-Park-_vhbngt.webp',
    label: 'Hawrelak Park',
    alt: 'Hawrelak Park trail',
  },
  {
    src: 'https://res.cloudinary.com/dahquiy48/image/upload/v1778107978/Gallagher-park_bdzox6.webp',
    label: 'Gallagher Park',
    alt: 'Gallagher Park trail',
  },
];

export default function RunClub() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="program-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="program-container">

        {/* HERO */}
        <section className="program-hero">
                  <div className="program-hero-text">
                    <span className="program-eyebrow">Next Up Run Club · August 2026</span>
                    <h1>
                      Show up ready.<br />
                      <span>Not catching up.</span>
                    </h1>
                    <p className="program-lead">
                      Most athletes wait until tryouts to get in shape. That's why they fall behind.
                      Next Up Run Club is a structured outdoor conditioning program designed to help
                      athletes build speed, endurance, and game-ready fitness before their season starts.
                    </p>
                  </div>

                  <div className="program-hero-images">
                    <div className="hero-image-primary">
                      <img
                        src={heroPhotos[0].src}
                        alt={heroPhotos[0].alt}
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                    <div className="hero-image-secondary">
                      <img
                        src={heroPhotos[1].src}
                        alt={heroPhotos[1].alt}
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  </div>
                </section>

                {/* SPONSOR STRIP */}
                <section className="rc-sponsor-strip">
                  <span className="rc-sponsor-strip-label">Proudly Sponsored By</span>
                  <div className="rc-sponsor-strip-logo-wrap">
                    <img
                      src="/supplement-world.jpg"
                      alt="Supplement World Newcastle"
                      className="rc-sponsor-strip-logo"
                    />
                  </div>
                  <span className="rc-sponsor-strip-name">Supplement World Newcastle</span>
                </section>

        {/* PROGRAM INFO */}
        <section className="program-section">
          <h2>Program Information</h2>
          <div className="included-grid">
            <div className="included-item">
              <h3>Dates</h3>
              <p>August 4 – August 27, 2026</p>
            </div>
            <div className="included-item">
              <h3>Schedule</h3>
              <p>Tuesdays &amp; Thursdays</p>
            </div>
            <div className="included-item">
              <h3>Time</h3>
              <p>6:30 PM – 8:00 PM</p>
            </div>
            <div className="included-item">
              <h3>Total Sessions</h3>
              <p>8 coached training sessions</p>
            </div>
            <div className="included-item">
              <h3>Ages</h3>
              <p>Boys &amp; Girls ages 11–18, grouped by level</p>
            </div>
            <div className="included-item">
              <h3>Cost</h3>
              <p>$100 for the full program · $15 drop-in per session (if space allows)</p>
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="program-section">
          <h2>What's Included</h2>
          <div className="included-grid">
            <div className="included-item">
              <h3>Coached Sessions</h3>
              <p>8 structured training sessions led by Next Up coaches</p>
            </div>
            <div className="included-item">
              <h3>Speed &amp; Conditioning Program</h3>
              <p>Structured curriculum focused on speed, endurance, and game-ready fitness</p>
            </div>
            <div className="included-item">
              <h3>Hydration Provided</h3>
              <p>Water and Gatorade provided at every session</p>
            </div>
            <div className="included-item">
              <h3>Post-Session Snacks</h3>
              <p>Light snacks provided after each training session</p>
            </div>
            <div className="included-item">
              <h3>Weekly Challenges</h3>
              <p>Competitive environment with weekly races and team challenges</p>
            </div>
            <div className="included-item">
              <h3>Athlete Recognition</h3>
              <p>One athlete earns The Earned Shirt each session for effort and mindset</p>
            </div>
          </div>
        </section>

        {/* SESSION LOCATIONS */}
        <section className="program-section">
          <h2>Session Locations</h2>
          <p>
            Sessions take place at outdoor locations across Edmonton's river valley, using hills,
            trails, and open space to create a varied and challenging training experience.
          </p>

          <ul className="rc-schedule-list">
            {sessions.map((s, i) => (
              <li key={i} className="rc-schedule-row">
                <span className="rc-schedule-date">{s.date}</span>
                <span className="rc-schedule-location">{s.location}</span>
              </li>
            ))}
          </ul>
          <p className="rc-fine-print">Exact meeting points will be shared prior to each session.</p>

          {/* LOCATION PHOTO GRID */}
          <div className="rc-photo-grid">
            {locationPhotos.map((photo, i) => (
              <div key={i} className="rc-photo-placeholder">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="rc-photo-label">{photo.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT TO EXPECT */}
        <section className="program-section">
          <h2>What to Expect</h2>
          <p>
            Each 90-minute session is structured and coached. Athletes are grouped by level
            to ensure the right intensity for all participants.
          </p>
          <ul className="simple-list">
            <li>Speed and acceleration</li>
            <li>Conditioning and endurance</li>
            <li>Hill and terrain-based training</li>
            <li>Agility and change of direction</li>
            <li>Competitive races and team challenges</li>
            <li>Proper warm-up and recovery</li>
          </ul>
        </section>

        {/* ATHLETE RECOGNITION */}
        <section className="program-section">
          <h2>Athlete Recognition</h2>
          <p>
            At the end of each session, one athlete will earn <strong>The Earned Shirt</strong> for
            their effort, competitiveness, and mindset.
          </p>
          <p>
            This recognition is not based on being the fastest athlete, but on who shows up,
            competes, and represents what Next Up stands for.
          </p>
        </section>

        {/* WHY THIS MATTERS */}
        <section className="program-section">
          <h2>Why This Matters</h2>
          <p>Conditioning is often the difference between:</p>
          <ul className="simple-list">
            <li>Making the team or getting cut</li>
            <li>Starting or sitting</li>
            <li>Competing or falling behind</li>
          </ul>
          <p>This program is built to make sure you show up ready.</p>
        </section>

        {/* WEATHER POLICY */}
        <section className="program-section">
          <h2>Weather Policy</h2>
          <p>
            All sessions are held outdoors. In the case of severe weather, unsafe trail conditions,
            poor air quality, or lightning risk, sessions may be adjusted, relocated, or rescheduled.
            Any changes will be communicated to participants as early as possible.
          </p>
        </section>

        {/* CTA */}
        <section className="program-section rc-cta-block">
          <h2>Spots Are Limited</h2>
          <p>
            To maintain quality and coaching standards, space is limited. Register early to secure
            your spot.
          </p>

          <a href={SIGNUP_URL} className="rc-register-btn" target="_blank" rel="noopener noreferrer">
            Register Now
          </a>

          <p className="rc-tagline">What's next is earned.</p>
        </section>

      </div>
    </motion.div>
  );
}