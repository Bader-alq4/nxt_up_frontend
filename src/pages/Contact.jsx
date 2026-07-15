import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Link as LinkIcon, Mail, MapPin, Music2 } from 'lucide-react';
import '../css_files/Sponsorship.css';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="partner-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="partner-container contact-container">
        <div className="contact-hero-panel">
          <p className="partner-eyebrow contact-eyebrow">Next Up Hoops</p>
          <h1 className="partner-heading contact-heading">Contact</h1>
          <p className="partner-intro contact-intro">
            Questions about teams, tournaments, training, registration, or partnerships?
            Reach out and we will point you to the right next step.
          </p>
        </div>

        <div className="contact-grid">
          <a href="mailto:info@nextuphoops.ca" className="contact-card">
            <span className="contact-icon"><Mail size={22} /></span>
            <span>
              <strong>Programs & Events</strong>
              <small>info@nextuphoops.ca</small>
            </span>
          </a>

          <a href="mailto:support@nextuphoops.ca" className="contact-card">
            <span className="contact-icon"><Mail size={22} /></span>
            <span>
              <strong>Technical Support</strong>
              <small>support@nextuphoops.ca</small>
            </span>
          </a>

          <div className="contact-card">
            <span className="contact-icon"><MapPin size={22} /></span>
            <span>
              <strong>Home Base</strong>
              <small>Edmonton, Alberta</small>
            </span>
          </div>
        </div>

        <div className="social-section">
          <h2 className="partner-subheading">Follow Next Up</h2>
          <div className="social-links">
            <a href="https://instagram.com/nextupelite" target="_blank" rel="noopener noreferrer" className="social-link">
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
            <a href="https://www.facebook.com/share/1AJEZHD6Ju/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-link">
              <Facebook size={20} />
              <span>Facebook</span>
            </a>
            <a href="https://www.tiktok.com/@nextupcanada" target="_blank" rel="noopener noreferrer" className="social-link">
              <Music2 size={20} />
              <span>TikTok</span>
            </a>
            <a href="https://linktr.ee/nextuphoops" target="_blank" rel="noopener noreferrer" className="social-link">
              <LinkIcon size={20} />
              <span>Linktree</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
