import React from 'react';
import '../css_stuff/Highlights.css';

export default function Highlights() {
  // Replace these with your actual image paths and captions
  const highlights = [
    {
      image: '/board.jpg',
      caption: 'Strategizing for success — every play begins with purpose.',
    },
    {
      image: '/team.jpg',
      caption: 'One falls, all rise. That’s what being a team means.',
    },
    {
      image: '/madih.jpg',
      caption: 'The standard is set — we don’t play to participate, we play to win.',
    },
  ];

  return (
    <section className="highlights-section">
      {/* <h2 className="highlights-heading">Club Highlights</h2> */}
      <div className="highlights-grid">
        {highlights.map((item, index) => (
          <div className="highlight-item" key={index}>
            <img src={item.image} alt={`Highlight ${index + 1}`} className="highlight-image" />
            <p className="highlight-caption">{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
