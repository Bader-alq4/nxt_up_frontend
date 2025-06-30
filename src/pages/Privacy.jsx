import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

function Privacy() {
  return (
    <PageTransition>
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>Information We Collect</h2>
          <p>For basketball tryout registration, we collect:</p>
          <ul>
            <li>Player's email address (for communication)</li>
            <li>Phone number (for emergency contact)</li>
            <li>Age group (for team placement)</li>
            <li>Payment information (processed securely through Stripe)</li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <ul>
            <li>To manage tryout registrations and assignments</li>
            <li>To communicate tryout schedules and results</li>
            <li>To process payments securely through Stripe</li>
            <li>To contact you in case of schedule changes or emergencies</li>
          </ul>
        </section>

        <section>
          <h2>Data Protection</h2>
          <ul>
            <li>We never share your information with unauthorized third parties</li>
            <li>Payment processing is handled securely by Stripe</li>
            <li>Your password is encrypted and cannot be viewed by our staff</li>
            <li>We keep your information only as long as necessary for tryout purposes</li>
          </ul>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct any mistakes in your information</li>
            <li>Request deletion of your information</li>
          </ul>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>If you have questions about your data or this privacy policy, please contact us at:</p>
          <p className="contact-email">admin@nextuphoops.ca</p>
        </section>

        <div className="privacy-footer">
          <Link to="/" className="back-link">Back to Home</Link>
        </div>
      </div>
    </PageTransition>
  );
}

export default Privacy; 