// src/components/Highlights.jsx
import React from 'react';
import '../css_stuff/Highlights.css';

const highlights = [
  { src: '/board.jpg' },
  { src: '/boys_calgary.jpg' },
  { src: '/girls_group_fun.jpg' },
  { src: '/highlight_dunk.jpg' },
  { src: '/girls_media.jpg' },
  { src: '/interview.jpg' },
  { src: '/girls_calgary.jpg' },
];

export default function Highlights() {
  return (
    <section className="highlights-section">
      <div className="highlights-header">
        <h2>More than Basketball</h2>
        <p>The hustle, the laughs, the highlights — all in the frame.</p>
      </div>

      <div className="highlight-grid">
        {highlights.map((item, idx) => (
          <div key={idx} className="highlight-card">
            <div className="highlight-image-wrapper">
              <img src={item.src} alt={`Highlight ${idx + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
