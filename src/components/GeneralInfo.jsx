import React from 'react';
import { Link } from 'react-router-dom';
import '../css_stuff/GeneralInfo.css';

const infoItems = [
  {
    image: '/fall.jpg',
    title: '2024 Fall Programs',
    description: 'Our 2024 Fall Programs focus on skill development, competition, and fun for all age groups.',
    link: '/tryouts-info/fall',
  },
  {
    image: '/spring.jpg',
    title: '2024 Spring Programs',
    description: 'Spring training prepares athletes for the next level with elite instruction and regional showcases.',
    link: '/tryouts-info/spring',
  },
  {
    image: '/tournaments.jpg',
    title: 'Tournaments',
    description: 'We participate in high-level tournaments to give players real-game exposure and experience.',
    link: '/Tournaments/info',
  },
  {
    image: '/camps.jpg',
    title: 'Camps/Programming',
    description: 'Our seasonal camps blend competitive training with community-building and development.',
    link: '/Training/info',
  },
];

export default function GeneralInfo() {
  return (
    <section className="general-info-section">
      <div className="next-up-banner">
        <h2>Next Up. Elite Bound.</h2>
      </div>

      <div className="general-info-grid">
        {infoItems.map((item, index) => (
          <div className="general-info-item" key={index}>
            <img src={item.image} alt={item.title} className="general-info-image" />
            <h3 className="general-info-title">{item.title}</h3>
            <p className="general-info-text">{item.description}</p>
            <Link to={item.link} className="learn-more-link">Learn More</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
