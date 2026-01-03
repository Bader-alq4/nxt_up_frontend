// src/components/NavBar.jsx
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import '../css_files/NavBar.css';

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
    { label: 'about', to: '/about' },
    { label: 'fall', to: '/FallTeams' },
    { label: 'spring', to: '/SpringTeams' },
    { label: 'winter', to: '/WinterProgramming' },
    { label: 'training', to: '/Training' },
    { label: 'tournaments', to: '/Tournaments' },
  ];

  const aboutSubmenu = [
    { label: 'mission', to: '/about#mission' },
    { label: 'events', to: '/#upcoming-events' },
    { label: 'contact', to: '/contact' },
  ];

  const fallSubmenu = [
    { label: "girls", to: "/FallTeams/Girls" },
    { label: "boys", to: "/FallTeams/Boys" },
  ];

  const springSubmenu = [
    { label: 'u13 boys', to: '/SpringTeams/13u-boys' },
    { label: 'u14 boys', to: '/SpringTeams/14u-boys' },
    { label: 'u15 boys', to: '/SpringTeams/15u-boys' },
    { label: 'u16 boys', to: '/SpringTeams/16u-boys' },
    { label: 'u17 boys', to: '/SpringTeams/17u-boys' },
    { label: 'u18 boys', to: '/SpringTeams/18u-boys' },
    { label: 'u15 girls', to: '/SpringTeams/15u-girls' },
    { label: 'u17 girls', to: '/SpringTeams/17u-girls' },
  ];

  const renderLinks = (isMobile = false) => (
    <>
      {navLinks.map((link, idx) => {
        if (link.label === 'about') {
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
        if (link.label === 'fall') {
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
        if (link.label === 'spring') {
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
            logout
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

        <ul className="nav-links">
          {renderLinks(false)}
        </ul>

        <button
          className="hamburger"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

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