import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../../css_files/TryoutInformation.css';

export default function FallTryouts() {
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
      <div className="tryout-wrapper">

        {/* ================= HERO ================= */}
        <header className="tryout-hero">
          <div className="hero-content">
            <span className="tryout-date">Fall 2026 Evaluation Process</span>
            <h1>Every Athlete Deserves<br />More Than One Opportunity.</h1>
            <p className="hero-subtitle" style={{ color: '#111' }}>
              A multi-step evaluation process giving every athlete a fair chance to earn their
              place within the Next Up Hoops Fall Program.
            </p>
          </div>

          <div className="hero-images-layout">
            <img
              src="https://res.cloudinary.com/dahquiy48/image/upload/v1767375626/boys_group_highlight_dih4fc.jpg"
              alt="Next Up Hoops game action"
              className="hero-img-1"
            />
            <img
              src="https://res.cloudinary.com/dahquiy48/image/upload/v1767639418/girls-bench_pdshhj.jpg"
              alt="Next Up Hoops training session"
              className="hero-img-2"
            />
          </div>
        </header>

        {/* ================= INTRO ================= */}
        <section className="intro-section">
          <div className="intro-content">
            <p>
              At Next Up Hoops, we believe one session should never define a player. Our
              evaluation process is designed to provide every athlete with multiple
              opportunities to compete while allowing our coaching staff to make informed
              roster decisions based on consistency, competitiveness, coachability, and
              long-term potential.
            </p>
            <p>
              Whether you're returning to Next Up Hoops or attending for the first time, every
              athlete begins with the same opportunity to earn their place within the program.
            </p>
            <div className="fee-box">
              <span className="fee-label">Evaluation Fee</span>
              <span className="fee-amount">$20</span>
              <span className="fee-note">
                Includes participation in the complete Fall 2026 evaluation process,
                including both ID Camps and any Final Tryout invitation you may receive.
                There are no additional evaluation fees.
              </span>
            </div>
          </div>
        </section>

        {/* ================= WHY WE EVALUATE ================= */}
        <section className="intro-section">
          <div className="intro-content">
            <h2 style={{ marginBottom: '1rem' }}>Why We Evaluate This Way</h2>
            <p>
              The best teams aren't built from a single performance. One great day shouldn't
              guarantee a roster spot, and one difficult day shouldn't eliminate an athlete
              from consideration. By evaluating athletes over multiple sessions, our coaching
              staff is able to make fair, informed decisions based on each athlete's overall
              body of work throughout the evaluation process.
            </p>
          </div>
        </section>

        {/* ================= EVALUATION TIMELINE ================= */}
        <section className="schedule-section">
          <h2>Evaluation Timeline</h2>

          <div className="evaluation-timeline">
            <div className="timeline-step">
              <div className="timeline-step-label">Step 1</div>
              <h3>ID Camp 1</h3>
              <p>
                All registered athletes begin the evaluation process by attending ID Camp 1.
                Following the session, select athletes may receive an invitation directly to
                the Final Tryout. Athletes who are not invited will continue to ID Camp 2 for
                another opportunity to advance.
              </p>
            </div>
            <div className="timeline-arrow">↓</div>

            <div className="timeline-step">
              <div className="timeline-step-label">Step 2</div>
              <h3>ID Camp 2</h3>
              <p>
                Athletes receive a second opportunity to compete and continue earning
                consideration for the Final Tryout. Following ID Camp 2, the remaining Final
                Tryout invitations will be issued.
              </p>
            </div>
            <div className="timeline-arrow">↓</div>

            <div className="timeline-step">
              <div className="timeline-step-label">Step 3 · Invitation Only</div>
              <h3>Final Tryout</h3>
              <p>
                Athletes invited to the Final Tryout compete for a roster position within the
                Next Up Hoops Fall Program. Receiving an invitation to the Final Tryout does
                not guarantee a roster spot.
              </p>
            </div>
            <div className="timeline-arrow">↓</div>

            <div className="timeline-step">
              <div className="timeline-step-label">Step 4</div>
              <h3>Initial Team Offers</h3>
              <p>
                Initial team offers will be sent via email on Sunday, August 9, 2026. As
                athletes accept or decline their roster position, additional offers may be
                extended over the following one to two weeks while Fall 2026 rosters are
                finalized.
              </p>
            </div>
          </div>
        </section>

        {/* ================= KEY DATES ================= */}
        <section className="key-dates-section">
          <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '2rem', letterSpacing: '-0.01em' }}>
            Key Dates
          </h2>
          <table className="key-dates-table">
            <thead>
              <tr>
                <th>Event</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ID Camp 1</td>
                <td>Saturday, August 1, 2026</td>
              </tr>
              <tr>
                <td>ID Camp 2 (Girls)</td>
                <td>Wednesday, August 5, 2026</td>
              </tr>
              <tr>
                <td>ID Camp 2 (Boys)</td>
                <td>Friday, August 7, 2026</td>
              </tr>
              <tr>
                <td>Final Tryout (Invitation Only)</td>
                <td>Saturday, August 8, 2026</td>
              </tr>
              <tr>
                <td>Initial Team Offers</td>
                <td>Sunday, August 9, 2026</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* ================= EVALUATION CRITERIA ================= */}
        <section className="eligibility-section">
          <h2>Evaluation Criteria</h2>
          <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
            Team selections are based on each athlete's overall performance throughout the
            evaluation process rather than a single session.
          </p>
          <div className="criteria-grid">
            <span className="criteria-chip">Basketball Skill</span>
            <span className="criteria-chip">Basketball IQ</span>
            <span className="criteria-chip">Competitiveness</span>
            <span className="criteria-chip">Coachability</span>
            <span className="criteria-chip">Effort</span>
            <span className="criteria-chip">Team Fit</span>
            <span className="criteria-chip">Commitment</span>
            <span className="criteria-chip">Reliability</span>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="faq-section">
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', letterSpacing: '-0.01em' }}>
            Frequently Asked Questions
          </h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary>Do I need to attend every evaluation session?</summary>
              <p>
                We strongly encourage athletes to attend every evaluation session, as multiple
                opportunities to compete give our coaching staff the best opportunity to
                evaluate each athlete fairly. If an athlete is unable to attend a session, we
                ask that families communicate with Next Up Hoops as soon as possible. Missing a
                session does not automatically eliminate an athlete from consideration.
                However, attending both ID Camps gives our coaching staff the most complete
                opportunity to evaluate each athlete before team selections are made.
              </p>
            </details>

            <details className="faq-item">
              <summary>Can I still make the team if I don't receive a Final Tryout invitation after ID Camp 1?</summary>
              <p>
                Yes. Athletes who are not invited following ID Camp 1 will continue to ID Camp
                2, where additional Final Tryout invitations will be issued.
              </p>
            </details>

            <details className="faq-item">
              <summary>Does receiving a Final Tryout invitation guarantee a roster spot?</summary>
              <p>
                No. The Final Tryout is the final stage of the evaluation process. Team
                selections are made after all evaluations have been completed.
              </p>
            </details>

            <details className="faq-item">
              <summary>How will I know if I've been selected?</summary>
              <p>
                Initial team offers will be sent via email beginning Sunday, August 9, 2026. As
                athletes accept or decline roster positions, additional offers may be sent over
                the following one to two weeks while teams are finalized.
              </p>
            </details>

            <details className="faq-item">
              <summary>What if I don't receive an initial team offer?</summary>
              <p>
                Not receiving an initial team offer does not necessarily mean the evaluation
                process has ended. As rosters continue to be finalized, additional athletes may
                be contacted if positions become available. We encourage all athletes and
                families to remain patient until rosters have been finalized.
              </p>
            </details>

            <details className="faq-item">
              <summary>What should athletes bring to evaluations?</summary>
              <p>
                Athletes should bring basketball shoes, a water bottle, appropriate basketball
                attire, and a positive attitude and strong work ethic. Numbered evaluation
                pinnies will be provided at check-in.
              </p>
            </details>

            <details className="faq-item">
              <summary>Is the $20 evaluation fee refundable?</summary>
              <p>
                No. The evaluation fee is non-refundable and reserves an athlete's spot in the
                Fall 2026 evaluation process.
              </p>
            </details>
          </div>
        </section>

        {/* ================= ADDITIONAL INFO ================= */}
        <section className="additional-info">
          <p>
            We're looking for athletes who are committed to improving, competing, and
            representing the Next Up Hoops program with character, effort, and
            professionalism.
          </p>
        </section>

        {/* ================= CTA ================= */}
        <section className="cta-section">
          {/* TODO(fall-2026-registration): replace with real Fall 2026 Evaluation Process registration URL */}
          <a href="#" className="register-button">
            Register for the Fall 2026 Evaluation Process
          </a>
          <p className="cta-note">Evaluation Fee: $20</p>
        </section>

      </div>
    </motion.div>
  );
}
