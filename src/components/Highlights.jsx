// src/components/Highlights.jsx
import React from 'react';
import '../css_files/Highlights.css';

const highlights = [
  { src: "https://res.cloudinary.com/dahquiy48/image/upload/w_600,q_auto,f_auto/board_blo3u0.jpg"},
  { src: 'https://res.cloudinary.com/dahquiy48/image/upload/v1767375626/boys_calgary_lu3u8q.jpg' },
  { src: 'https://res.cloudinary.com/dahquiy48/image/upload/v1767375679/girls_group_fun_cujd6k.jpg'},
  { src: 'https://res.cloudinary.com/dahquiy48/image/upload/v1767375680/highlight_dunk_qosyle.jpg' },
  { src: 'https://res.cloudinary.com/dahquiy48/image/upload/v1767375679/girls_media_ahe6ch.jpg' },
  { src: 'https://res.cloudinary.com/dahquiy48/image/upload/v1767375681/interview_kcu21c.jpg'},
  { src: 'https://res.cloudinary.com/dahquiy48/image/upload/v1767375679/girls_calgary_drqnww.jpg'},
];

export default function Highlights() {
  return (
    <section className="highlights-section">
      <div className="highlight-scroll">
        {highlights.map((item, idx) => (
          <div key={idx} className="highlight-item">
            <img 
              src={item.src} 
              alt="" 
              loading="lazy"
              decoding="async"
              fetchpriority={idx === 0 ? "high" : "low"}
            />
          </div>
        ))}
      </div>
    </section>
  );
}