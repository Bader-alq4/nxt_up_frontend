import React from 'react';
import '../css_stuff/Highlights.css';

const highlights = [
  {
    src: '/board.jpg',
    caption: 'Strategizing for success — every play begins with purpose.'
  },
  {
    src: '/team.jpg',
    caption: 'One falls, all rise. That’s what being a team means.'
  },
  {
    src: '/madih.jpg',
    caption: 'The standard is set — we don’t play to participate, we play to win.'
  }
];

export default function Highlights() {
  return (
    <section className="highlights-section">
      <div className="highlights-header">
        <h2>Highlights from the Grind</h2>
        <p>Moments that define our standard — leadership, teamwork, and grit.</p>
      </div>

      <div className="highlight-grid">
        {highlights.map((item, idx) => (
          <div key={idx} className="highlight-card">
            <div className="highlight-image-wrapper">
              <img src={item.src} alt={`Highlight ${idx + 1}`} />
            </div>
            <p className="highlight-caption">{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
