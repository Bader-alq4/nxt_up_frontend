import React from 'react';
import { motion } from 'framer-motion';
import '../css_files/Development.css';

const stages = [
  {
    number: '01',
    name: 'ESTABLISH',
    label: 'Foundations Stage',
    level: 'Beginner / Intermediate',
    description: [
      'The Establish stage is where athletes begin building the habits, movement patterns, and basketball fundamentals that define long-term development. The focus is on creating a positive, structured environment where athletes develop confidence and a genuine love for the game.',
      'Training at this level is designed to be challenging but accessible. Athletes learn how to practice, how to compete, and what it means to be part of a team.',
    ],
    ageRange: '10U – 16U',
    idealFor:
      'Athletes new to basketball or players looking to build a strong foundation of movement, coordination, and game understanding before stepping into more competitive environments.',
    programs: ['Skills Clinics', 'Camps', '3X3 Programs'],
    sketch: (
      <svg className="stage-sketch" viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#d8d8d8" fill="none" strokeLinecap="round">
          <circle cx="55" cy="55" r="40" strokeWidth="1" />
          <circle cx="55" cy="55" r="20" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="15" y1="55" x2="95" y2="55" strokeWidth="0.8" />
          <line x1="55" y1="15" x2="55" y2="95" strokeWidth="0.8" />
        </g>
      </svg>
    ),
  },
  {
    number: '02',
    name: 'BUILD',
    label: 'Development Stage',
    level: 'Intermediate',
    description: [
      'The Build stage is for athletes who are ready to commit. Training becomes more demanding, skill development is more targeted, and athletes are expected to show consistency in their effort and approach.',
      'Decision-making, team concepts, and individual skill refinement are emphasized. This stage is about developing players who understand the game, not just how to play it.',
    ],
    ageRange: '11U – 18U',
    idealFor:
      'Athletes with a solid base who are ready to train harder, compete more seriously, and take real ownership of their development over an extended period.',
    programs: ['Training Programs', 'House League', '3X3 Leagues', 'Development Teams'],
    sketch: (
      <svg className="stage-sketch" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#d8d8d8" fill="none" strokeLinecap="round">
          <path d="M 10 110 A 100 100 0 0 1 110 110" strokeWidth="1.1" />
          <rect x="35" y="60" width="50" height="50" strokeWidth="1" />
          <path d="M 35 60 A 25 25 0 0 1 85 60" strokeWidth="1" strokeDasharray="3,3" />
          <circle cx="60" cy="110" r="4" strokeWidth="1" />
        </g>
      </svg>
    ),
  },
  {
    number: '03',
    name: 'COMPETE',
    label: 'Competitive Stage',
    level: 'Advanced',
    description: [
      'The Compete stage introduces athletes to high-level competitive environments — regional tournaments, travel exposure, and performance under pressure. Training intensity increases significantly, and athletes are held to a higher standard in practice and in games.',
      'Technical skill, basketball IQ, and tactical awareness are the core development priorities at this stage. Athletes are building the tools they need for the next level.',
    ],
    ageRange: '13U – 18U',
    idealFor:
      'Athletes with a strong development foundation who are ready for demanding training environments and want meaningful competitive exposure at a regional level.',
    programs: ['Club / Tournament Teams', 'House League', 'HP Training Academy'],
    sketch: (
      <svg className="stage-sketch" viewBox="0 0 115 115" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#d8d8d8" fill="none" strokeLinecap="round">
          <rect x="10" y="10" width="95" height="95" strokeWidth="1" />
          <line x1="10" y1="57" x2="105" y2="57" strokeWidth="0.8" />
          <path d="M 10 25 A 80 80 0 0 1 10 89" strokeWidth="1.1" />
          <rect x="10" y="35" width="38" height="44" strokeWidth="1" />
          <path d="M 48 35 A 22 22 0 0 1 48 79" strokeWidth="1" strokeDasharray="3,3" />
          <circle cx="20" cy="57" r="5" strokeWidth="1" />
        </g>
      </svg>
    ),
  },
  {
    number: '04',
    name: 'PERFORM',
    label: 'High Performance Stage',
    level: 'Elite',
    description: [
      'The Perform stage is the highest level of Next Up Hoops programming. Athletes here are preparing for national circuit competition, post-secondary exposure, and elite development environments. The expectations at this level are professional in nature.',
      'Selection into this stage is based on tryouts and coach evaluation. Athletes must demonstrate the skill, mindset, and professionalism required to compete and represent the program on the biggest stages.',
    ],
    ageRange: '15U – 18U',
    idealFor:
      'Athletes selected through evaluation who are prepared to compete at the highest levels of youth basketball and are serious about pursuing post-secondary opportunities.',
    programs: ['Circuit Teams', 'Club / Tournament Teams', 'HP Training Academy'],
    sketch: (
      <svg className="stage-sketch" viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#d8d8d8" fill="none" strokeLinecap="round">
          <rect x="5" y="5" width="110" height="80" strokeWidth="1.2" rx="1" />
          <line x1="60" y1="5" x2="60" y2="85" strokeWidth="0.9" />
          <circle cx="60" cy="45" r="18" strokeWidth="1" />
          <rect x="5" y="25" width="28" height="40" strokeWidth="1" />
          <rect x="87" y="25" width="28" height="40" strokeWidth="1" />
          <path d="M 5 18 A 45 45 0 0 1 5 72" strokeWidth="1" />
          <path d="M 115 18 A 45 45 0 0 0 115 72" strokeWidth="1" />
        </g>
      </svg>
    ),
  },
];

export default function Development() {
  return (
    <motion.div
      className="dev-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Grain overlay */}
      <div className="dev-grain" aria-hidden="true" />

      {/* ── Hero ── */}
      <div className="dev-hero">
        {/* Full court hand-drawn sketch */}
        <svg
          className="dev-hero-sketch"
          viewBox="0 0 420 360"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g stroke="#d4d4d4" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <rect x="30" y="30" width="360" height="300" strokeWidth="1.2" rx="2" />
            <circle cx="210" cy="180" r="55" strokeWidth="1.1" />
            <circle cx="210" cy="180" r="3" strokeWidth="1" fill="#d4d4d4" />
            <line x1="210" y1="30" x2="210" y2="330" strokeWidth="0.9" />
            <rect x="30" y="115" width="90" height="130" strokeWidth="1" />
            <path d="M 120 115 A 65 65 0 0 1 120 245" strokeWidth="1" strokeDasharray="4,4" />
            <path d="M 30 80 A 140 140 0 0 1 30 280" strokeWidth="1" />
            <rect x="300" y="115" width="90" height="130" strokeWidth="1" />
            <path d="M 300 115 A 65 65 0 0 0 300 245" strokeWidth="1" strokeDasharray="4,4" />
            <path d="M 390 80 A 140 140 0 0 0 390 280" strokeWidth="1" />
            <circle cx="50" cy="180" r="10" strokeWidth="1" />
            <line x1="30" y1="180" x2="40" y2="180" strokeWidth="1.2" />
            <circle cx="370" cy="180" r="10" strokeWidth="1" />
            <line x1="380" y1="180" x2="390" y2="180" strokeWidth="1.2" />
          </g>
        </svg>

        <p className="dev-eyebrow">Next Up Hoops</p>
        <h1 className="dev-title">The Development Pathway</h1>
        <p className="dev-subtitle">
          Every athlete enters at a different point. What matters is where you're headed.
          Our pathway is built to meet you where you are, and push you toward where you
          want to go.
        </p>
      </div>

      {/* ── Stages ── */}
      <div className="dev-stages">
        {stages.map((stage, idx) => (
          <div key={idx} className="dev-stage">
            {/* Per-stage court sketch */}
            <div className="stage-sketch-wrap" aria-hidden="true">
              {stage.sketch}
            </div>

            <div className="dev-stage-left">
              <span className="dev-stage-number">{stage.number}</span>

              <div className="dev-stage-identity">
                <h2 className="dev-stage-name">
                  <span>{stage.name}</span>
                </h2>
                <p className="dev-stage-label">{stage.label}</p>
                <span className="dev-stage-level">{stage.level}</span>
              </div>
            </div>

            <div className="dev-stage-right">
              <div className="dev-stage-desc">
                {stage.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="dev-stage-meta">
                <div className="dev-meta-item">
                  <span className="dev-meta-label">Age Range</span>
                  <span className="dev-meta-value">{stage.ageRange}</span>
                </div>
                <div className="dev-meta-item">
                  <span className="dev-meta-label">Ideal For</span>
                  <span className="dev-meta-value">{stage.idealFor}</span>
                </div>
                <div className="dev-meta-item">
                  <span className="dev-meta-label">Programs</span>
                  <ul className="dev-programs-list">
                    {stage.programs.map((prog, i) => (
                      <li key={i}>{prog}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Closer ── */}
      <div className="dev-closer">
        {/* Full court sketch behind closer text */}
        <svg
          className="dev-closer-sketch"
          viewBox="0 0 500 200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <g stroke="#e8e8e8" fill="none" strokeLinecap="round">
            <rect x="10" y="10" width="480" height="180" strokeWidth="1.3" rx="2" />
            <line x1="250" y1="10" x2="250" y2="190" strokeWidth="1" />
            <circle cx="250" cy="100" r="45" strokeWidth="1" />
            <rect x="10" y="45" width="80" height="110" strokeWidth="1" />
            <rect x="410" y="45" width="80" height="110" strokeWidth="1" />
            <path d="M 90 45 A 55 55 0 0 1 90 155" strokeWidth="1" strokeDasharray="4,4" />
            <path d="M 410 45 A 55 55 0 0 0 410 155" strokeWidth="1" strokeDasharray="4,4" />
            <path d="M 10 25 A 160 160 0 0 1 10 175" strokeWidth="1" />
            <path d="M 490 25 A 160 160 0 0 0 490 175" strokeWidth="1" />
            <circle cx="35" cy="100" r="8" strokeWidth="1" />
            <circle cx="465" cy="100" r="8" strokeWidth="1" />
          </g>
        </svg>

        <p className="dev-closer-primary">The pathway is clear. The work is yours.</p>
        <p className="dev-closer-secondary">
          Whatever stage you're in, Next Up has a place for athletes who are ready to
          commit.
        </p>
      </div>
    </motion.div>
  );
}
