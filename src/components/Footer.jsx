import React from 'react';
import '../css_stuff/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-column">
          <h4 className="footer-heading">GOOD HOOPS CLUB</h4>
          <p>admin@nextuphoops.ca</p>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">ABOUT</h4>
          <ul>
            <li>Our Vision</li>
            <li>Alumni</li>
            <li>Latest News</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">PROGRAMS/EVENTS</h4>
          <ul>
            <li>Winter Programs</li>
            <li>Training & Camps</li>
            <li>Tournaments</li>
            <li>Summer Slam</li>
            <li>Fall Classic</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">IMPACT</h4>
          <ul>
            <li>Success Stories</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
