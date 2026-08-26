import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css_files/WinterProgramming.css';

const trainingFocus = [
  'Shooting and shot preparation',
  'Finishing through contact',
  'Ball handling and change of pace',
  'Attacking closeouts',
  'Passing and playmaking',
  'Ball-screen reads',
  'Off-ball movement and footwork',
  'Decision-making at game speed',
  'On-ball and help defence',
  'Rebounding and communication',
];

const developmentPlan = [
  {
    week: '01',
    title: 'Baseline + Competition',
    text: "Coaches get to know each athlete's game, establish areas of focus, and introduce the training and competition environment.",
  },
  {
    week: '02',
    title: 'Creating Advantages',
    text: 'Change of pace, separation, first-step attacks, and creating space against defenders.',
  },
  {
    week: '03',
    title: 'Finishing',
    text: 'Footwork, touch, contact finishes, and scoring efficiently around the rim.',
  },
  {
    week: '04',
    title: 'Shooting + Attacking Closeouts',
    text: 'Shot preparation, movement shooting, attacking closeouts, and making efficient reads.',
  },
  {
    week: '05',
    title: 'Playmaking',
    text: 'Passing, driving, reading help defenders, and creating opportunities for teammates.',
  },
  {
    week: '06',
    title: 'Ball-Screen Decision-Making',
    text: 'Using screens, reading defensive coverage, rejecting screens, and making the correct next decision.',
  },
  {
    week: '07',
    title: 'Playing Without the Ball',
    text: 'Spacing, cutting, relocation, timing, and creating advantages away from the ball.',
  },
  {
    week: '08',
    title: 'Defensive Performance',
    text: 'Ball pressure, closeouts, help defence, communication, switching, and rebounding.',
  },
  {
    week: '09',
    title: 'Competition + 3X3 Playoffs',
    text: 'Athletes apply the winter curriculum in live competition as the 3X3 Series enters the playoffs.',
  },
  {
    week: '10',
    title: 'Winter Finale + Championship',
    text: 'The program closes with final training, championship competition, player recognition, prizes, and development conversations.',
  },
];

const programDates = [
  { date: 'November 29', label: 'Session 1' },
  { date: 'December 6', label: 'Session 2' },
  { date: 'December 13', label: 'Session 3' },
  { date: 'Holiday Break', label: 'No sessions', break: true },
  { date: 'January 10', label: 'Session 4' },
  { date: 'January 17', label: 'Session 5' },
  { date: 'January 24', label: 'Session 6' },
  { date: 'January 31', label: 'Session 7' },
  { date: 'February 7', label: 'Session 8' },
  { date: 'Family Day Weekend', label: 'No session', break: true },
  { date: 'February 21', label: 'Session 9' },
  { date: 'February 28', label: 'Session 10' },
];

const checkIns = [
  {
    number: '01',
    title: 'Beginning',
    text: 'Establish strengths, identify areas of focus, and give each athlete clear priorities for the winter.',
  },
  {
    number: '02',
    title: 'Midpoint',
    text: 'Discuss progress, provide direct feedback, and set the focus for the second half of the program.',
  },
  {
    number: '03',
    title: 'Final',
    text: 'Review development and give the athlete direction on what to continue working on after the program.',
  },
];

export default function WinterProgramming() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="winter-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <header className="winter-hero">
        <div className="winter-hero-inner">
          <div className="winter-hero-copy">
            <p className="winter-eyebrow">Next Up Hoops · Winter 2026/27</p>
            <h1>Winter High Performance Training</h1>
            <p className="winter-hero-subtitle">
              High performance training and a competitive 3X3 series in one focused
              Sunday session each week.
            </p>
            <p className="winter-hero-description">
              Keep developing throughout the winter without adding another full team
              schedule. Athletes receive consistent coaching and live competition while
              maintaining their school basketball, community basketball, academics, and
              family commitments.
            </p>
            <a className="winter-primary-link" href="#winter-registration">
              View Pricing &amp; Registration
            </a>
          </div>

          <div className="winter-hero-mark" aria-hidden="true">
            <span className="winter-mark-small">Train</span>
            <strong>3X3</strong>
            <span className="winter-mark-large">Compete</span>
          </div>
        </div>

        <div className="winter-quick-facts">
          <div><strong>10</strong><span>Sunday Sessions</span></div>
          <div><strong>20</strong><span>Total Hours</span></div>
          <div><strong>2 HR</strong><span>Each Sunday</span></div>
          <div className="winter-division-fact">
            <strong>Boys U13–U18</strong>
            <strong>Girls U15–U18</strong>
          </div>
        </div>
      </header>

      <main>
        <section className="winter-section winter-overview">
          <div className="winter-section-heading">
            <span>01</span>
            <h2>Built for the Winter Season</h2>
          </div>
          <div className="winter-section-content winter-overview-grid">
            <div>
              <p className="winter-lead">
                Winter schedules are already busy. This program gives athletes a reliable
                place to train and compete without asking them to take on another team.
              </p>
              <p>
                Sessions run for two hours on Sunday late afternoons. The calendar also
                includes a holiday break and a Family Day weekend break, making the
                program easier to manage alongside an athlete's existing commitments.
              </p>
            </div>
            <ul className="winter-no-list">
              <li>No weekday practices</li>
              <li>No additional travel</li>
              <li>No extra tournament weekends</li>
              <li>No second team schedule</li>
            </ul>
          </div>
        </section>

        <section className="winter-dark-section">
          <div className="winter-dark-inner">
            <div className="winter-section-heading winter-section-heading-light">
              <span>02</span>
              <h2>Train. Read. Compete.</h2>
            </div>
            <div className="winter-development-grid">
              <article>
                <span className="winter-card-label">High Performance Training</span>
                <h3>Skills that carry into games</h3>
                <p>
                  Team practices naturally focus on systems and upcoming opponents during
                  the season. These sessions protect time for individual development and
                  give athletes the repetitions needed to keep improving.
                </p>
                <div className="winter-focus-grid">
                  {trainingFocus.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>

              <article className="winter-3x3-card">
                <span className="winter-card-label">Next Up Winter 3X3 Series</span>
                <h3>Competition is part of the training</h3>
                <p>
                  Athletes move from skill work into live 1-on-1 and 2-on-2 situations
                  before competing in 3X3. Balanced teams play throughout the winter,
                  building toward playoffs and a Winter Championship.
                </p>
                <ul>
                  <li>Weekly 3X3 competition</li>
                  <li>Team standings and playoff seeding</li>
                  <li>Playoffs and Winter Championship</li>
                  <li>Player recognition and prizes</li>
                  <li>Media coverage throughout the program</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="winter-section">
          <div className="winter-section-heading">
            <span>03</span>
            <h2>Small Groups. High-Quality Reps.</h2>
          </div>
          <div className="winter-section-content">
            <p className="winter-lead">
              Registration is limited so athletes receive meaningful repetitions and
              direct coaching. Groups will be organized by age and gender, then adjusted
              by ability and registration numbers when needed.
            </p>
            <div className="winter-groups">
              <div>
                <span className="winter-group-label">Boys</span>
                <strong>U13/U14</strong>
                <strong>U15/U16</strong>
                <strong>U17/U18</strong>
              </div>
              <div>
                <span className="winter-group-label">Girls</span>
                <strong>U15/U16</strong>
                <strong>U17/U18</strong>
              </div>
            </div>
            <p className="winter-fine-print">
              Final groupings may be adjusted to create the strongest training and
              competition environment for registered athletes.
            </p>
          </div>
        </section>

        <section className="winter-section winter-plan-section">
          <div className="winter-section-heading">
            <span>04</span>
            <h2>10-Week Development Plan</h2>
          </div>
          <div className="winter-section-content winter-plan-list">
            {developmentPlan.map((item) => (
              <article className="winter-plan-row" key={item.week}>
                <span className="winter-week">Week {item.week}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="winter-section winter-checkins-section">
          <div className="winter-section-heading">
            <span>05</span>
            <h2>Player Development Check-Ins</h2>
          </div>
          <div className="winter-section-content">
            <p className="winter-lead">
              Athletes should understand what they are working toward. Coaches meet with
              players at three points in the program to provide clear feedback and
              accountability.
            </p>
            <div className="winter-checkins">
              {checkIns.map((item) => (
                <article key={item.number}>
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="winter-section">
          <div className="winter-section-heading">
            <span>06</span>
            <h2>Program Dates</h2>
          </div>
          <div className="winter-section-content">
            <div className="winter-dates">
              {programDates.map((item) => (
                <div className={`winter-date-row${item.break ? ' winter-date-break' : ''}`} key={`${item.date}-${item.label}`}>
                  <span>{item.label}</span>
                  <strong>{item.date}</strong>
                  {!item.break && <em>Sunday · Late afternoon</em>}
                </div>
              ))}
            </div>
            <p className="winter-fine-print">
              Exact session times and location will be announced before the program begins.
            </p>
          </div>
        </section>

        <section className="winter-pathway">
          <div>
            <span className="winter-card-label">Looking Ahead</span>
            <h2>Ahead of Spring/Summer 2027</h2>
          </div>
          <div>
            <p>
              Winter training gives athletes the chance to experience Next Up before our
              Spring/Summer 2027 tryouts. It also gives our coaches time to learn how each
              athlete competes and responds to coaching over several weeks.
            </p>
            <p>
              Next Up will offer Circuit and Provincial team pathways for Spring/Summer
              2027. Participation in the winter program does not guarantee a roster spot.
              All athletes must still complete the official tryout process.
            </p>
          </div>
        </section>

        <section className="winter-registration" id="winter-registration">
          <div className="winter-registration-heading">
            <p className="winter-eyebrow">Registration</p>
            <h2>Winter High Performance Training</h2>
            <p>Boys U13–U18 · Girls U15–U18</p>
            <p>November 29, 2026 to February 28, 2027</p>
          </div>

          <div className="winter-pricing-panel">
            <div className="winter-price-row">
              <div>
                <span>Early Registration</span>
                <p>Available through November 8, 2026</p>
              </div>
              <strong>$349</strong>
            </div>
            <div className="winter-price-row">
              <div>
                <span>Regular Registration</span>
                <p>Begins November 9 and remains open until groups are full</p>
              </div>
              <strong>$399</strong>
            </div>
          </div>

          <div className="winter-registration-action">
            <p>
              Space is intentionally limited within each group. Once a group reaches
              capacity, registration for that group will close.
            </p>
            <div className="winter-registration-contact">
              <a href="mailto:info@nextuphoops.ca?subject=Winter%20High%20Performance%20Training%20Registration">
                Ask About Registration
              </a>
              <a className="winter-email-link" href="mailto:info@nextuphoops.ca">
                info@nextuphoops.ca
              </a>
            </div>
            <span>Online registration link coming soon</span>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
