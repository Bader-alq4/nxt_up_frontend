import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css_files/WinterProgramming.css';

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
            <div className="winter-hero-title-block">
              <p className="winter-eyebrow">Next Up Hoops · Winter 2026/27</p>
              <h1>Winter High Performance Academy</h1>
            </div>
            <div className="winter-hero-details">
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
        </div>
      </header>

      <main>
        <section className="winter-section winter-essentials">
          <div className="winter-section-heading">
            <span>01</span>
            <h2>What Athletes Get</h2>
          </div>
          <div className="winter-section-content">
            <p className="winter-lead">
              One focused Sunday session combines individual development, coached game
              situations, and live 3X3 competition.
            </p>
            <div className="winter-essentials-list">
              <article>
                <h3>High-performance training</h3>
                <p>Game-speed work that develops scoring, playmaking, footwork, and defence.</p>
              </article>
              <article>
                <h3>Weekly competition</h3>
                <p>Skill work moves into 1-on-1 and 2-on-2 situations before weekly 3X3 play.</p>
              </article>
              <article>
                <h3>Direct coaching feedback</h3>
                <p>Athletes receive check-ins at the beginning, midpoint, and end of the academy.</p>
              </article>
              <article>
                <h3>A manageable winter schedule</h3>
                <p>There are no weekday practices, extra travel, or additional tournament weekends.</p>
              </article>
            </div>
            <div className="winter-groups-panel">
              <div>
                <span>Training Groups</span>
                <h3>Who It’s For</h3>
              </div>
              <div className="winter-groups-panel-list">
                <strong>High School Boys</strong>
                <strong>High School Girls</strong>
                <strong>Junior High Boys</strong>
                <strong>Junior High Girls</strong>
              </div>
            </div>
            <p className="winter-fine-print">
              Registration is limited so every group can maintain meaningful repetitions
              and direct access to coaches.
            </p>
          </div>
        </section>

        <section className="winter-section">
          <div className="winter-section-heading">
            <span>02</span>
            <h2>Program Dates</h2>
          </div>
          <div className="winter-section-content">
            <div className="winter-dates winter-dates-grid">
              {programDates.map((item) => (
                <div className={`winter-date-row${item.break ? ' winter-date-break' : ''}`} key={`${item.date}-${item.label}`}>
                  <span>{item.label}</span>
                  <strong>{item.date}</strong>
                </div>
              ))}
            </div>
            <p className="winter-fine-print">
              All training dates are Sundays in the late afternoon. Exact session times
              and location will be announced before the program begins.
            </p>
          </div>
        </section>

        <section className="winter-section winter-training-section">
          <div className="winter-section-heading">
            <span>03</span>
            <h2>Training &amp; Development</h2>
          </div>
          <div className="winter-section-content">
            <p className="winter-lead">
              Training progresses from individual skills into decision-making and live
              play, finishing with 3X3 playoffs and a Winter Championship.
            </p>
            <div className="winter-training-summary">
              <span>Shooting &amp; finishing</span>
              <span>Ball handling &amp; attacking</span>
              <span>Passing &amp; playmaking</span>
              <span>Off-ball movement</span>
              <span>Defence &amp; rebounding</span>
              <span>3X3 competition</span>
            </div>
            <details className="winter-plan-details">
              <summary>
                <span>View the full 10-week development plan</span>
                <strong aria-hidden="true">+</strong>
              </summary>
              <div className="winter-plan-list winter-plan-grid">
                {developmentPlan.map((item) => (
                  <article className="winter-plan-row" key={item.week}>
                    <span className="winter-week">Week {item.week}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section className="winter-pathway winter-pathway-compact">
          <div>
            <span className="winter-card-label">Looking Ahead</span>
            <h2>Spring/Summer 2027</h2>
          </div>
          <div>
            <p>
              The academy gives athletes and coaches time to work together before
              Spring/Summer 2027 tryouts. Winter participation does not guarantee a roster
              spot; every athlete must still complete the official tryout process.
            </p>
          </div>
        </section>

        <section className="winter-registration" id="winter-registration">
          <div className="winter-registration-heading">
            <p className="winter-eyebrow">Registration</p>
            <h2>Pricing &amp; Registration</h2>
            <p>November 29, 2026 to February 28, 2027</p>
          </div>

          <div className="winter-registration-details">
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
              <p className="winter-payment-note">Payment plans are available at checkout.</p>
            </div>

            <div className="winter-registration-action">
              <p>
                Space is intentionally limited within each group. Once a group reaches
                capacity, registration for that group will close.
              </p>
              <div className="winter-registration-contact">
                <a
                  href="https://registration.teamsnap.com/form/80841"
                  target="_blank"
                  rel="noreferrer"
                >
                  Register Now
                </a>
                <a className="winter-email-link" href="mailto:info@nextuphoops.ca">
                  info@nextuphoops.ca
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
