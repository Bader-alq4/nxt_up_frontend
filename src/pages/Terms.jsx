import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

function Terms() {
  return (
    <PageTransition>
      <div className="privacy-container">
        <h1>Terms and Conditions</h1>
        <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>1. Tryout Registration</h2>
          <ul>
            <li>Registration is not guaranteed until payment is received</li>
            <li>Players must arrive on time for their scheduled tryout</li>
            <li>The club reserves the right to modify tryout schedules with notice</li>
          </ul>
        </section>

        <section>
          <h2>2. Age and Eligibility</h2>
          <ul>
            <li>Players must participate in their appropriate age group</li>
            <li>Proof of age may be required</li>
            <li>Parent/guardian consent is required for participants under 18</li>
            <li>The club reserves the right to verify age and eligibility information</li>
          </ul>
        </section>

        <section>
          <h2>3. Payment and Refunds</h2>
          <ul>
            <li>Tryout fees are non-refundable</li>
            <li>Payment must be completed before participation</li>
            <li>Accepted payment methods include credit card (via Stripe) or cash</li>
          </ul>
        </section>

        <section>
          <h2>4. Health and Safety</h2>
          <ul>
            <li>Players participate at their own risk</li>
            <li>Players must be physically fit to participate</li>
            <li>The club is not liable for injuries during tryouts</li>
            <li>Players must follow all safety instructions from coaches and staff</li>
          </ul>
        </section>

        <section>
          <h2>5. Code of Conduct</h2>
          <ul>
            <li>Players and parents must demonstrate good sportsmanship</li>
            <li>Disruptive behavior may result in removal from tryouts</li>
            <li>Harassment or discrimination will not be tolerated</li>
            <li>Club staff decisions regarding team selection are final</li>
          </ul>
        </section>

        <section>
          <h2>6. Communication</h2>
          <ul>
            <li>Primary communication will be through registered email</li>
            <li>Emergency contact information must be kept current</li>
            <li>Photos/videos may be taken during tryouts for club use</li>
            <li>Opt-out requests for media must be submitted in writing</li>
          </ul>
        </section>

        <section>
          <h2>Contact</h2>
          <p>For questions about these terms, please contact:</p>
          <p className="contact-email">admin@nextuphoops.ca</p>
        </section>

        <div className="privacy-footer">
          <Link to="/" className="back-link">Back to Home</Link>
        </div>
      </div>
    </PageTransition>
  );
}

export default Terms; 