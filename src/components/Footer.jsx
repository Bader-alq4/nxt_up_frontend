import React from 'react';
import { Link } from 'react-router-dom';
import '../css_stuff/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* NEXT UP */}
        <div className="footer-column">
          <h4 className="footer-heading">NEXT UP</h4>
          <a href="mailto:info@nextuphoops.ca" className="footer-link">
            info@nextuphoops.ca
          </a>
        </div>

        {/* ABOUT */}
        <div className="footer-column">
          <h4 className="footer-heading">ABOUT</h4>
          <ul>
            <li>
              <Link to="/about#mission" className="footer-link">
                Our Mission
              </Link>
            </li>
            <li>
              <Link to="/#upcoming-events" className="footer-link">
                Events
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* PROGRAMS/EVENTS */}
        <div className="footer-column">
          <h4 className="footer-heading">PROGRAMS/EVENTS</h4>
          <ul>
            <li>
              <Link to="/WinterProgramming" className="footer-link">
                Winter Programs
              </Link>
            </li>
            <li>
              <Link to="/Training" className="footer-link">
                Training &amp; Camps
              </Link>
            </li>
            <li>
              <Link to="/Tournaments" className="footer-link">
                Tournaments
              </Link>
            </li>
            <li>
              <Link to="/FallTeams" className="footer-link">
                Fall Season
              </Link>
            </li>
            <li>
              <Link to="/SpringTeams" className="footer-link">
                Spring Season
              </Link>
            </li>
          </ul>
        </div>

        {/* IMPACT */}
        <div className="footer-column">
          <h4 className="footer-heading">IMPACT</h4>
          <ul>
            <li>
              <Link to="/testimonials" className="footer-link">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        {/* GET INVOLVED */}
        <div className="footer-column">
          <h4 className="footer-heading">GET INVOLVED</h4>
          <ul>
            <li>
              <Link to="/sponsorship" className="footer-link">
                Sponsorship
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
