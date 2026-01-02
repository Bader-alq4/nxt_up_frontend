import React from 'react';
import { Link } from 'react-router-dom';
import '../css_stuff/GeneralInfo.css';

const infoItems = [
  {
    image: 'https://res.cloudinary.com/dahquiy48/image/upload/v1767375664/fall_qc9mux.jpg',
    title: '2025 Fall Programs',
    description: 'Our 2025 Fall Programs focus on skill development, competition, and fun for all age groups.',
    link: 'FallTeams',
  },
  {
    image: 'https://res.cloudinary.com/dahquiy48/image/upload/v1767375694/spring_bkozur.jpg',
    title: '2026 Spring Programs',
    description: 'Spring training prepares athletes for the next level with elite instruction and regional showcases.',
    link: '/SpringTeams',
  },
  {
    image: 'https://res.cloudinary.com/dahquiy48/image/upload/v1767375694/tournaments_zjucif.jpg',
    title: 'Tournaments',
    description: 'We participate in high-level tournaments to give players real-game exposure and experience.',
    link: '/Tournaments',
  },
  {
    image: 'https://res.cloudinary.com/dahquiy48/image/upload/v1767375627/camps_rgyuvf.jpg',
    title: 'Camps/Programming',
    description: 'Our seasonal camps blend competitive training with community-building and development.',
    link: '/Training',
  },
];

export default function GeneralInfo() {
  return (
    <section className="general-info-section">
      <div className="next-up-banner">
        <h2>
          Next Up. <span>Elite Bound.</span>
        </h2>
        {/* Link now includes the hash to scroll to the mission section */}
        <Link to="/about#mission" className="vision-button">
          Our Mission →
        </Link>
        <a href="#upcoming-events" className="see-events-button">
          See Upcoming Events →
        </a>
      </div>

      <div className="general-info-grid">
        {infoItems.map((item, index) => (
          <div className="general-info-item" key={index}>
            <img
              src={item.image}
              alt={item.title}
              className="general-info-image"
            />
            <h3 className="general-info-title">{item.title}</h3>
            <p className="general-info-text">{item.description}</p>
            <Link to={item.link} className="learn-more-link">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
