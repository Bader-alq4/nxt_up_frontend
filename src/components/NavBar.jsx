// src/components/NavBar.jsx
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import '../css_stuff/NavBar.css';

export default function NavBar() {
  const { user, logout } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', to: '/about' },
    { label: 'Fall Season', to: '/FallTeams' },
    { label: 'Spring Season', to: '/SpringTeams' },
    { label: 'Winter Programming', to: '/WinterProgramming' },
    { label: 'Training/Camps', to: '/Training' },
    { label: 'Tournaments', to: '/Tournaments' },
  ];

  if (!user) {
    navLinks.push({ label: 'Login', to: '/login' });
  } else if (!user.is_admin) {
    navLinks.push({ label: 'Dashboard', to: '/dashboard' });
  } else {
    navLinks.push({ label: 'Admin', to: '/admin' });
  }

  const aboutSubmenu = [
    { label: 'Our Mission', to: '/about#mission' },
    { label: 'Events', to: '/#upcoming-events' },
    { label: 'Why Choose Us', to: '/about#why-choose-us' },
    { label: 'Contact', to: '/contact' },
  ];

  const fallSubmenu = [
    { label: 'Tryouts Information', to: '/FallTeams' },
    { label: '13U Boys', to: '/FallTeams/13u-boys' },
    { label: '15U Boys', to: '/FallTeams/15u-boys' },
    { label: '16U Boys', to: '/FallTeams/16u-boys' },
    { label: '17U Boys', to: '/FallTeams/17u-boys' },
    { label: '18U Boys', to: '/FallTeams/18u-boys' },
    { label: '15U Girls', to: '/FallTeams/15u-girls' },
    { label: '16U Girls', to: '/FallTeams/16u-girls' },
  ];

  const springSubmenu = [
    { label: 'Tryouts Information', to: '/SpringTeams' },
    { label: '13U Boys', to: '/SpringTeams/13u-boys' },
    { label: '15U Boys', to: '/SpringTeams/15u-boys' },
    { label: '16U Boys', to: '/SpringTeams/16u-boys' },
    { label: '17U Boys', to: '/SpringTeams/17u-boys' },
    { label: '18U Boys', to: '/SpringTeams/18u-boys' },
    { label: '15U Girls', to: '/SpringTeams/15u-girls' },
    { label: '16U Girls', to: '/SpringTeams/16u-girls' },
  ];

  // Helper to render nav links (for both desktop and mobile)
  const renderLinks = (isMobile = false) => (
    <>
      {navLinks.map((link, idx) => {
        if (link.label === 'About') {
          return (
            <li key={idx} className={`nav-item dropdown${isMobile ? ' mobile-dropdown' : ''}`}>
              <Link to={link.to} className="nav-link" onClick={() => setMobileMenuOpen(false)}>{link.label}</Link>
              <ul className="dropdown-menu">
                {aboutSubmenu.map((item, i) => (
                  <li key={i}>
                    <Link to={item.to} onClick={() => setMobileMenuOpen(false)}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        }
        if (link.label === 'Fall Season') {
          return (
            <li key={idx} className={`nav-item dropdown${isMobile ? ' mobile-dropdown' : ''}`}>
              <Link to={link.to} className="nav-link" onClick={() => setMobileMenuOpen(false)}>{link.label}</Link>
              <ul className="dropdown-menu">
                {fallSubmenu.map((item, i) => (
                  <li key={i}>
                    <Link to={item.to} onClick={() => setMobileMenuOpen(false)}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        }
        if (link.label === 'Spring Season') {
          return (
            <li key={idx} className={`nav-item dropdown${isMobile ? ' mobile-dropdown' : ''}`}>
              <Link to={link.to} className="nav-link" onClick={() => setMobileMenuOpen(false)}>{link.label}</Link>
              <ul className="dropdown-menu">
                {springSubmenu.map((item, i) => (
                  <li key={i}>
                    <Link to={item.to} onClick={() => setMobileMenuOpen(false)}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        }
        return (
          <li key={idx} className="nav-item">
            <Link className="nav-link" to={link.to} onClick={() => setMobileMenuOpen(false)}>
              {link.label}
            </Link>
          </li>
        );
      })}
      {user && (
        <li className="nav-item">
          <button onClick={() => { logout(); setMobileMenuOpen(false); }} className="nav-link button-link">
            Logout
          </button>
        </li>
      )}
    </>
  );

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/"><img src="/final_logo.jpg" alt="Logo" /></Link>
        </div>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          {renderLinks(false)}
        </ul>

        {/* Hamburger Icon for Mobile */}
        <button
          className="hamburger"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="7" width="32" height="3" rx="1.5" fill="#36a4d6" />
            <rect y="15" width="32" height="3" rx="1.5" fill="#36a4d6" />
            <rect y="23" width="32" height="3" rx="1.5" fill="#36a4d6" />
          </svg>
        </button>

        {/* Mobile Sidebar Menu */}
        {mobileMenuOpen && (
          <>
            <div className="mobile-sidebar-overlay" onClick={() => setMobileMenuOpen(false)} />
            <div className="mobile-sidebar">
              <ul className="mobile-nav-links">
                {renderLinks(true)}
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
