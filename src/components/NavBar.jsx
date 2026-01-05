// src/components/NavBar.jsx
import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import '../css_files/NavBar.css';

export default function NavBar() {
  const { user, logout } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.toggle('no-scroll', mobileMenuOpen);
    return () => document.body.classList.remove('no-scroll');
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'About', to: '/about' },
    { label: 'Club Teams' },
    { label: 'Winter' },
    { label: 'Training' },
    { label: 'Tournaments' },
  ];

  const aboutSubmenu = [
    { label: 'Mission', to: '/about#mission' },
    { label: 'Events', to: '/#upcoming-events' },
    { label: 'Contact', to: '/contact' },
  ];

  const clubTeamsSubmenu = [
    { label: 'Spring 2026 Boys', to: '/ClubTeams/Spring-2026-Boys' },
    { label: 'Spring 2026 Girls', to: '/ClubTeams/Spring-2026-Girls' },
    { label: 'Spring 2026 Tryouts', to: '/ClubTeams/Tryouts' },
  ];

  const winterSubmenu = [
    { label: 'Winter Programming', to: '/WinterProgramming' },
  ];

  const trainingSubmenu = [
    { label: 'Training Program', to: '/Training' },
  ];

  const tournamentsSubmenu = [
    { label: 'Participating Tournaments', to: '/Tournaments' },
  ];

  const getSubmenu = (label) => {
    switch (label) {
      case 'About':
        return aboutSubmenu;
      case 'Club Teams':
        return clubTeamsSubmenu;
      case 'Winter':
        return winterSubmenu;
      case 'Training':
        return trainingSubmenu;
      case 'Tournaments':
        return tournamentsSubmenu;
      default:
        return [];
    }
  };

  const handleMobileNavClick = (link) => {
    const submenu = getSubmenu(link.label);
    if (submenu.length > 0) {
      setActiveSubmenu({ label: link.label, items: submenu });
    } else if (link.to) {
      navigate(link.to);
      setMobileMenuOpen(false);
      setActiveSubmenu(null);
    }
  };

  const handleSubmenuClick = (to) => {
    navigate(to);
    setMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  const handleBackClick = () => {
    setActiveSubmenu(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  const renderDesktopLinks = () => (
    <>
      {navLinks.map((link, idx) => {
        if (link.label === 'About') {
          return (
            <li key={idx} className="nav-item dropdown">
              <Link to={link.to} className="nav-link">
                {link.label}
              </Link>
              <ul className="dropdown-menu">
                {aboutSubmenu.map((item, i) => (
                  <li key={i}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        }

        if (link.label === 'Club Teams') {
          return (
            <li key={idx} className="nav-item dropdown">
              <span className="nav-link nav-link-disabled">{link.label}</span>
              <ul className="dropdown-menu">
                {clubTeamsSubmenu.map((item, i) => (
                  <li key={i}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        }

        if (link.label === 'Winter') {
          return (
            <li key={idx} className="nav-item dropdown">
              <span className="nav-link nav-link-disabled">{link.label}</span>
              <ul className="dropdown-menu">
                {winterSubmenu.map((item, i) => (
                  <li key={i}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        }

        if (link.label === 'Training') {
          return (
            <li key={idx} className="nav-item dropdown">
              <span className="nav-link nav-link-disabled">{link.label}</span>
              <ul className="dropdown-menu">
                {trainingSubmenu.map((item, i) => (
                  <li key={i}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        }

        if (link.label === 'Tournaments') {
          return (
            <li key={idx} className="nav-item dropdown">
              <span className="nav-link nav-link-disabled">{link.label}</span>
              <ul className="dropdown-menu">
                {tournamentsSubmenu.map((item, i) => (
                  <li key={i}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        }

        return (
          <li key={idx} className="nav-item">
            <Link className="nav-link" to={link.to}>
              {link.label}
            </Link>
          </li>
        );
      })}

      {user && (
        <li className="nav-item">
          <button onClick={logout} className="nav-link button-link">
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
          <Link to="/">
            <img src="/final_logo.jpg" alt="Logo" />
          </Link>
        </div>

        <ul className="nav-links">{renderDesktopLinks()}</ul>

        <button
          className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        {mobileMenuOpen && (
          <div className="mobile-fullscreen-menu">
            <div className="mobile-menu-header">
              <div className="logo">
                <Link to="/" onClick={closeMobileMenu}>
                  <img src="/final_logo.jpg" alt="Logo" />
                </Link>
              </div>
              <button
                className="hamburger open"
                aria-label="Close menu"
                onClick={closeMobileMenu}
              >
                <span />
                <span />
                <span />
              </button>
            </div>

            <div className="mobile-menu-content">
              <ul className="mobile-nav-list">
                {navLinks.map((link, idx) => (
                  <li key={idx} className="mobile-nav-item">
                    <button
                      className="mobile-nav-button"
                      onClick={() => handleMobileNavClick(link)}
                    >
                      <span>{link.label}</span>
                      <span className="mobile-nav-arrow">›</span>
                    </button>
                  </li>
                ))}
                {user && (
                  <li className="mobile-nav-item">
                    <button
                      className="mobile-nav-button"
                      onClick={() => {
                        logout();
                        closeMobileMenu();
                      }}
                    >
                      <span>Logout</span>
                    </button>
                  </li>
                )}
              </ul>
            </div>

            {activeSubmenu && (
              <div className="mobile-submenu-screen">
                <div className="mobile-menu-header">
                  <div className="logo">
                    <Link to="/" onClick={closeMobileMenu}>
                      <img src="/final_logo.jpg" alt="Logo" />
                    </Link>
                  </div>
                  <button
                    className="hamburger open"
                    aria-label="Close menu"
                    onClick={closeMobileMenu}
                  >
                    <span />
                    <span />
                    <span />
                  </button>
                </div>

                <div className="mobile-submenu-content">
                  <button
                    className="mobile-back-button"
                    onClick={handleBackClick}
                  >
                    <span className="mobile-back-arrow">‹</span>
                    <span>Back</span>
                  </button>

                  <ul className="mobile-submenu-list">
                    {activeSubmenu.items.map((item, idx) => (
                      <li key={idx} className="mobile-submenu-item">
                        <a
                          className="mobile-submenu-link"
                          onClick={() => handleSubmenuClick(item.to)}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}