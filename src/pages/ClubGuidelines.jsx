import React from 'react';
import { motion } from 'framer-motion';
import '../css_files/ClubGuidelines.css';

const COMPLAINT_URL = 'https://app.alias-solution.com/contact/en/aba';

const sections = [
  {
    heading: 'Athlete Safety',
    title: 'Athlete Safety Guidelines',
    body: [
      'All Next Up Hoops coaches and staff are required to pass an annual criminal record and vulnerable sector background check before working with athletes in our program.',
      'All coaching staff must also complete the Safe Sport certification course every 24 months. This ensures our staff are equipped to recognize, address, and prevent unsafe situations, keeping athletes protected at every level of our program.',
      'These standards are maintained in alignment with Canada Basketball Verified Program requirements.',
    ],
  },
];

export default function ClubGuidelines() {
  return (
    <motion.div
      className="cg-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="cg-hero">
        <p className="cg-eyebrow">Next Up Hoops</p>
        <h1 className="cg-title">Club Guidelines & Initiatives</h1>
        <p className="cg-subtitle">
          Next Up Hoops is committed to providing a safe, professional, and development-focused
          environment for every athlete in our program. These guidelines reflect the standards
          we hold our coaches, staff, and organization to.
        </p>
      </div>

      <div className="cg-sections">
        {sections.map((s, idx) => (
          <div key={idx} className="cg-section">
            <div className="cg-section-left">
              <h2 className="cg-section-heading">{s.heading}</h2>
            </div>
            <div className="cg-section-right">
              <h3 className="cg-section-title">{s.title}</h3>
              {s.body.map((para, i) => (
                <p key={i} className="cg-section-body">{para}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="cg-resources">
        <div className="cg-resource-img">
          <img src="/rule-of-two.jpg" alt="Rule of Two — Safety in Numbers" />
        </div>
        <a
          href={COMPLAINT_URL}
          className="cg-resource-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="cg-resource-link-eyebrow">Report a Concern</span>
          <h3 className="cg-resource-link-title">File a Complaint</h3>
          <p className="cg-resource-link-body">
            If you need to report a concern related to athlete safety or misconduct,
            use the official complaint portal to submit a report confidentially.
          </p>
          <span className="cg-resource-link-action">
            Open complaint portal
            <span className="cg-resource-link-arrow" aria-hidden="true">→</span>
          </span>
        </a>
      </div>
    </motion.div>
  );
}
