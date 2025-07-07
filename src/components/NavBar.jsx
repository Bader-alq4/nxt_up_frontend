import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import '../css_stuff/NavBar.css';

export default function NavBar() {
  const { user, logout } = useContext(AuthContext);

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
    { label: 'Latest News', to: '/#upcoming-events' },
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

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/"><img src="/final_logo.jpg" alt="Logo" /></Link>
        </div>

        <ul className="nav-links">
          {navLinks.map((link, idx) => {
            if (link.label === 'About') {
              return (
                <li key={idx} className="nav-item dropdown">
                  <Link className="nav-link" to={link.to}>
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

            if (link.label === 'Fall Season') {
              return (
                <li key={idx} className="nav-item dropdown">
                  <Link className="nav-link" to={link.to}>
                    {link.label}
                  </Link>
                  <ul className="dropdown-menu">
                    {fallSubmenu.map((item, i) => (
                      <li key={i}>
                        <Link to={item.to}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            if (link.label === 'Spring Season') {
              return (
                <li key={idx} className="nav-item dropdown">
                  <Link className="nav-link" to={link.to}>
                    {link.label}
                  </Link>
                  <ul className="dropdown-menu">
                    {springSubmenu.map((item, i) => (
                      <li key={i}>
                        <Link to={item.to}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            // Winter Programming, Training/Camps, Tournaments, Login/Dashboard/Admin, etc.
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
        </ul>
      </div>
    </nav>
  );
}
