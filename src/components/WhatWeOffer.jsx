import React from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  CalendarDays,
  Dumbbell,
  HandHeart,
  Trophy,
  Users,
  Video,
  Zap,
} from 'lucide-react';
import '../css_files/WhatWeOffer.css';

export default function WhatWeOffer() {
  const featuredPathways = [
    {
      label: 'Season Teams',
      title: 'Spring & Fall Teams',
      text: 'Structured boys and girls programs with practices, tournaments, coaching, media coverage, and clear expectations for families.',
      to: '/ClubTeams',
    },
    {
      label: 'Elite Pathway',
      title: 'Spring/Summer Circuit Teams',
      text: 'A future selective Spring/Summer travel team option built around multiple high-level tournament and showcase stops.',
      to: '/development',
    },
  ];

  const offerings = [
    {
      label: 'Training',
      title: 'High Performance Development',
      text: 'Skill work, basketball IQ, habits, and competitive training for athletes who want to separate themselves.',
      to: '/development',
      icon: Dumbbell,
    },
    {
      label: 'Winter',
      title: 'Winter Programming',
      text: 'Seasonal programming designed to keep athletes active, sharp, and developing outside the main club seasons.',
      to: '/WinterProgramming',
      icon: CalendarDays,
    },
    {
      label: 'Events',
      title: 'Hosted Tournaments',
      text: 'Next Up Invitational events built around organized game days, athlete recognition, and a better tournament experience.',
      to: '/Tournaments',
      icon: Trophy,
    },
    {
      label: 'Performance',
      title: 'Run Club & Conditioning',
      text: 'Outdoor speed, endurance, and game-ready fitness training for athletes preparing to compete with pace.',
      to: '/RunClub',
      icon: Activity,
    },
    {
      label: 'Experience',
      title: 'Media, Gear & Team Culture',
      text: 'Professional media coverage, team apparel, bonding activities, and a program athletes are proud to represent.',
      to: '/ClubTeams',
      icon: Video,
    },
    {
      label: 'Access',
      title: 'Access, Grants & Funding',
      text: 'Support pathways and community partnerships that help families access quality basketball opportunities.',
      to: '/grants-funding',
      icon: HandHeart,
    },
  ];

  return (
    <section className="what-we-offer">
      <div className="offer-inner">
        <div className="offer-section-header">
          <div>
            <span className="offer-eyebrow">Programs & Player Development</span>
            <h2 className="offer-section-title">A complete athlete experience.</h2>
          </div>
          <p className="offer-section-subtitle">
            Next Up Hoops gives families a complete basketball environment: team pathways,
            training, tournaments, media, and support systems that help athletes develop with
            structure and confidence.
          </p>
        </div>

        <div className="offer-showcase">
          <article className="offer-feature-card">
            <div className="offer-feature-icon">
              <Users size={28} />
            </div>
            <span className="offer-card-label">Team Pathways</span>
            <h3>Year-round programs with standards.</h3>
            <p>
              From spring and fall teams to future Spring/Summer circuit teams, athletes get
              organized coaching, meaningful competition, clear communication, and a pathway
              built around the level they are preparing for.
            </p>
            <div className="offer-pathway-list">
              {featuredPathways.map((item) => (
                <Link key={item.title} to={item.to} className="offer-pathway-row">
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.text}</small>
                  </span>
                  <span className="offer-row-arrow">→</span>
                </Link>
              ))}
            </div>
          </article>

          <aside className="offer-standards-card">
            <span className="offer-card-label">The Next Up Standard</span>
            <h3>Train. Compete. Be seen.</h3>
            <ul>
              <li>Development-first coaching</li>
              <li>Competitive events and team structure</li>
              <li>Professional media and athlete experience</li>
              <li>Support for families and long-term growth</li>
            </ul>
          </aside>
        </div>

        <div className="offer-grid">
          {offerings.map((item, index) => {
            const Icon = item.icon || Zap;
            return (
              <Link key={item.title} to={item.to} className="offer-card">
                <div className="offer-card-topline">
                  <span className="offer-card-icon"><Icon size={21} /></span>
                  <span className="offer-card-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <span className="offer-card-label">{item.label}</span>
                <h3 className="offer-card-title">{item.title}</h3>
                <p className="offer-card-subtitle">{item.text}</p>
                <span className="offer-card-link">View program →</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
