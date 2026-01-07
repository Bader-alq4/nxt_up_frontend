import React from 'react';
import { Link } from 'react-router-dom';
import '../css_files/GeneralInfo.css';



const infoItems = [
  {
    image: 'https://res.cloudinary.com/dahquiy48/image/upload/v1767375694/tournaments_zjucif.jpg',
    title: 'Boys Club Teams',
    link: '/ClubTeams/Spring-2026-Boys',
  },
  {
    image: 'https://res.cloudinary.com/dahquiy48/image/upload/v1767375627/camps_rgyuvf.jpg',
    title: 'Girls Club Teams',
    link: '/ClubTeams/Spring-2026-Girls',
  },
  {
    image: 'https://res.cloudinary.com/dahquiy48/image/upload/v1767375694/spring_bkozur.jpg',
    title: 'tournaments',
    link: '/Tournaments',
  },
  {
    image: 'https://res.cloudinary.com/dahquiy48/image/upload/v1767375664/fall_qc9mux.jpg',
    title: 'sessions',
    link: '/Training',
  },
];

export default function GeneralInfo() {
  return (
    <section className="general-info-section">
      <div className="info-grid">
        {infoItems.map((item, index) => (
          <Link to={item.link} className="info-card" key={index}>
            <div className="info-image-wrapper">
              <img 
                src={item.image} 
                alt="" 
                loading="lazy"
                decoding="async"
                fetchpriority={index < 2 ? "high" : "low"}
              />
            </div>
            <div className="info-label">
              <span>{item.title}</span>
              <span className="info-arrow">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}