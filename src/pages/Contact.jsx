import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../css_stuff/Sponsorship.css';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      className="sponsorship-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="sponsorship-container">
        <h1 className="sponsorship-heading">CONTACT</h1>
        <p className="sponsorship-intro">
          We love hearing from athletes, parents, coaches, and community members! Reach out to us with your questions, feedback, or just to say hello.
        </p>
        <div style={{marginTop: '2rem'}}>
          <div style={{marginBottom: '1.5rem'}}>
            <strong>Email:</strong> <a href="mailto:info@nextuphoops.ca" className="sponsorship-link">info@nextuphoops.ca</a>
          </div>
          <div style={{marginBottom: '1.5rem'}}>
            <strong>Technical Support:</strong> <a href="mailto:support@nextuphoops.ca" className="sponsorship-link">support@nextuphoops.ca</a>
          </div>
          <div style={{marginBottom: '1.5rem'}}>
            <strong>Instagram:</strong> <a href="https://instagram.com/nextupelite" target="_blank" rel="noopener noreferrer" className="sponsorship-link">@nextuphoops</a>
          </div>
          <div style={{marginBottom: '1.5rem'}}>
            <strong>Facebook:</strong> <a href="https://www.facebook.com/share/1AJEZHD6Ju/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="sponsorship-link">https://www.facebook.com/nextuphoops</a>
          </div>
          <div style={{marginBottom: '1.5rem'}}>
            <strong>TikTok:</strong> <a href="https://www.tiktok.com/@nextupcanada" target="_blank" rel="noopener noreferrer" className="sponsorship-link">https://www.tiktok.com/@nextupcanada</a>
          </div>
          <div style={{marginBottom: '1.5rem'}}>
            <strong>Linktree:</strong> <a href="https://linktr.ee/nextuphoops?fbclid=PAZXh0bgNhZW0CMTEAAafgeH4wG0BENyhGNJ8DVd7gzG3PMZ2LuMn3y3vgYJiUy5Sz0xWIqw3PuEYJvw_aem_kOvaqRM0alKoirU0Pq5vjA" target="_blank" rel="noopener noreferrer" className="sponsorship-link">https://linktr.ee/nextupelite</a>
          </div>
          <div style={{marginBottom: '1.5rem'}}>
            <strong>Location:</strong> Edmonton, Alberta
          </div>
        </div>
        <div className="testimonials-footer" style={{marginTop: '2.5rem', color: '#aaa', fontStyle: 'italic'}}>More ways to connect coming soon!</div>
      </div>
    </motion.div>
  );
} 