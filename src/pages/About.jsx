import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css_files/About.css';

const storySections = [
  {
    title: 'Where It All Began',
    paragraphs: [
      'Next Up Hoops began in November 2023 with a simple vision and just eight athletes at our very first open gym.',
      "We didn't have a long history or an established reputation. What we had was a commitment to putting people first. We believed that if we built the right culture, stayed true to our values, and consistently invested in our athletes, everything else would follow.",
      "Since then, we've been humbled by the growth of our community, but what we're most proud of isn't the number of teams we've built or tournaments we've played. It's the confidence we've seen athletes develop, the friendships they've formed, and the lifelong lessons they've carried with them beyond basketball.",
    ],
  },
  {
    title: 'Our Why',
    paragraphs: [
      "We didn't create Next Up to be just another basketball club.",
      'We created it to build a community where mentorship, relationships, and personal growth matter just as much as athletic development.',
      'We believe every athlete deserves coaches who genuinely care, teammates who support one another, and an environment where they feel seen, encouraged, and challenged to become the best version of themselves.',
      'Our goal has always been to create something that lasts far beyond a single season. A place where athletes always know they have people in their corner and where former players one day return as coaches, mentors, volunteers, and leaders for the next generation.',
      "That's how lasting communities are built.",
    ],
  },
  {
    title: 'What Makes Next Up Different',
    paragraphs: [
      'From day one, we never wanted Next Up to feel like it belonged to one person.',
      'We wanted it to feel like it belonged to everyone who believes in what we are building.',
      'Every athlete, parent, coach, volunteer, and alumni plays a role in shaping our culture. Every person contributes to the environment that makes this community special.',
      'No one should ever feel like just another registration or another name on a roster.',
    ],
    callouts: [
      'Every athlete matters.',
      'Every family matters.',
      'Every coach matters.',
      'Every person who believes in our mission matters.',
    ],
    closing:
      "The strongest communities are built by people who care for one another, continue showing up, and leave the program better than they found it. That's the standard we hold ourselves to every single day.",
  },
  {
    title: "What's Next Is Earned",
    paragraphs: [
      'To us, "What\'s Next Is Earned" is more than a slogan.',
      'It is the standard we live by.',
      "Success isn't built under the bright lights of tournament weekends. It's earned during the early mornings, the late nights, the extra reps, the difficult conversations, and the moments when nobody is watching.",
      "It's choosing discipline over excuses, consistency over shortcuts, and growth over comfort.",
      "Our responsibility is to walk alongside every athlete throughout that journey. To challenge them, support them, celebrate their successes, and help them discover what they're capable of, both on and off the court.",
    ],
  },
  {
    title: 'Our Promise',
    paragraphs: [
      'Everything we do begins with people.',
      "If an athlete leaves Next Up more confident than when they arrived, we've done our job.",
      "If they leave with lifelong friendships, stronger character, and memories they'll carry for years, we've done our job.",
      "If they look back years from now and remember Next Up as a place where they felt valued, believed in, and part of something bigger than themselves, then we've accomplished exactly what we set out to build.",
      'Because basketball is what brings us together.',
      'The people are what make Next Up special.',
    ],
    finalLine: "What's Next Is Earned.",
  },
];

export default function About() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, [location]);

  return (
    <motion.main
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <section className="about-hero" id="mission">
        <div className="about-hero-copy">
          <span className="about-eyebrow">Our Story</span>
          <h1>Built for More Than Basketball</h1>
          <div className="about-intro">
            <p>Next Up Hoops was never created because Edmonton needed another basketball club.</p>
            <p>
              It was built because we believed young athletes deserved something more. More than
              practices and tournaments. More than a team for one season. We wanted to create a
              place where athletes feel valued, challenged, supported, and surrounded by people who
              genuinely care about who they become, both on and off the court.
            </p>
            <p>That belief continues to guide everything we do.</p>
          </div>
        </div>

        <div className="about-hero-image">
          <img
            src="https://res.cloudinary.com/dahquiy48/image/upload/w_600,q_auto,f_auto/board_blo3u0.jpg"
            alt="Next Up Hoops team huddle"
            loading="eager"
            fetchpriority="high"
          />
        </div>
      </section>

      <section className="about-story">
        {storySections.map((section) => (
          <article className="about-story-section" key={section.title}>
            <h2>{section.title}</h2>
            <div className="about-section-body">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {section.callouts && (
                <div className="about-callout-list">
                  {section.callouts.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              )}

              {section.closing && <p>{section.closing}</p>}
              {section.finalLine && <p className="about-final-line">{section.finalLine}</p>}
            </div>
          </article>
        ))}
      </section>
    </motion.main>
  );
}
