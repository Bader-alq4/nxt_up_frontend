import React from 'react';
import '../css_files/WhatWeOffer.css';

export default function WhatWeOffer() {
  const offerings = [
    { number: '01', title: 'Competitive Club Teams', subtitle: 'U13–U18 Boys & Girls' },
    { number: '02', title: 'Professional Media', subtitle: 'Highlights & Recruiting Content. We Will also be streaming select games live on our Twitch channel' },
    { number: '03', title: 'Shoot360 Training', subtitle: 'Smart hoops that measure arc & provide instant feedback' },
    { number: '04', title: 'Tournament Play', subtitle: 'Local, Provincial & U.S.' },
    { number: '05', title: 'Monthly Team Bonding', subtitle: 'Team outings & activities to build chemistry' },
    { number: '06', title: 'Premium Team Gear', subtitle: 'Matching tracksuits & Nike Elite custom backpacks' },
    { number: '06', title: 'NCCP Coaching Standards', subtitle: 'We follow national coaching standards through the NCCP framework' },
    { number: '06', title: 'Skill Training', subtitle: 'Additional on-court skill development sessions'}
    
  ];

  return (
    <section className="what-we-offer">
      <div className="offer-section-header">
        <h2 className="offer-section-title">What We Offer</h2>
        <p className="offer-section-subtitle">Comprehensive basketball development programs</p>
      </div>
      <div className="offer-grid">
        {offerings.map((item, index) => (
          <div key={index} className="offer-card">
            <div className="offer-card-number">{item.number}</div>
            <h3 className="offer-card-title">{item.title}</h3>
            <p className="offer-card-subtitle">{item.subtitle}</p>
            <div className="offer-card-divider"></div>
          </div>
        ))}
      </div>
    </section>
  );
}