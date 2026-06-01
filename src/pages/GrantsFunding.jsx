import React from 'react';
import { motion } from 'framer-motion';
import '../css_files/GrantsFunding.css';

const programs = [
  {
    name: 'KidSport',
    image: '/kidsport.jpg',
    alt: 'KidSport Canada',
    description:
      'KidSport provides need-based grants to help cover registration fees for children who would otherwise be unable to participate in organized sport. Families can apply directly through the KidSport Alberta provincial fund.',
    link: 'https://kidsportcanada.ca/alberta/provincial-fund/',
    cta: 'Apply Through KidSport',
  },
  {
    name: 'Jumpstart',
    image: '/jumpstart.jpg',
    alt: 'Canadian Tire Jumpstart',
    description:
      'Canadian Tire Jumpstart helps kids in financial need access sport and recreation by covering registration and equipment costs. Families can apply online through the Jumpstart resources portal.',
    link: 'https://jumpstart.canadiantire.ca/pages/resources-for-parents',
    cta: 'Apply Through Jumpstart',
  },
];

export default function GrantsFunding() {
  return (
    <motion.div
      className="gf-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="gf-hero">
        <p className="gf-eyebrow">Next Up Hoops</p>
        <h1 className="gf-title">Grants & Funding</h1>
        <p className="gf-subtitle">
          Cost should never be the reason an athlete can't play. Next Up Hoops is a
          grant-eligible program where families can apply for need-based funding through the
          programs below to help cover registration fees.
        </p>
      </div>

      <div className="gf-sections">
        <div className="gf-section">
          <div className="gf-section-left">
            <h2 className="gf-section-heading">Financial Assistance</h2>
          </div>
          <div className="gf-section-right">
            <h3 className="gf-section-title">Grant Funding Programs</h3>
            <p className="gf-section-body">
              Next Up Hoops is a KidSport and Jumpstart eligible program. Both organizations
              offer need-based funding that families can apply for directly online. Grants are
              designed to remove financial barriers so athletes can access the development and
              competitive opportunities they deserve.
            </p>
            <p className="gf-section-body">
              If you have questions about eligibility or need support with the application
              process, reach out to us through the contact page and we'll help guide you
              through it.
            </p>
          </div>
        </div>
      </div>

      <div className="gf-cards">
        {programs.map((prog, idx) => (
          <div key={idx} className="gf-card">
            <div className="gf-card-img">
              <img src={prog.image} alt={prog.alt} />
            </div>
            <div className="gf-card-body">
              <h3 className="gf-card-name">{prog.name}</h3>
              <p className="gf-card-desc">{prog.description}</p>
              <a
                className="gf-card-link"
                href={prog.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {prog.cta} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
