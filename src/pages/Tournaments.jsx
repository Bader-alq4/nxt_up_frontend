import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../css_files/Tournaments.css';

const tournamentStandards = [
  {
    title: 'Purposeful Events',
    text: 'We do not want our events to feel thrown together. Every tournament needs a clear reason behind it and a standard people can feel all weekend.',
  },
  {
    title: 'Organized Game Days',
    text: 'Teams should know where to be and what to expect. When the details are handled early, coaches can focus on coaching.',
  },
  {
    title: 'Athlete Recognition',
    text: 'Athletes put a lot into these weekends. We want strong play to be noticed. We want effort and leadership to be noticed too.',
  },
  {
    title: 'Meaningful Championships',
    text: 'The final games should feel different. When a team earns a championship, the moment should feel like it matters.',
  },
];

const tournamentCards = [
  {
    season: 'Fall',
    title: 'Next Up Fall Invitational',
    status: 'October 2-4, 2026',
    text: 'Our first Fall Invitational brings invited programs to Edmonton for a weekend built around strong competition and a real championship atmosphere.',
    to: '/Tournaments/Fall-Invitational',
  },
  {
    season: 'Spring',
    title: 'Next Up Spring Invitational',
    status: 'Coming Soon',
    text: 'Our spring event is still being built. We will share the full details once the event plan is ready.',
    to: '/Tournaments/Spring-Invitational',
  },
];

const tickerItems = [
  '4 Game Guarantee',
  'Certified Officials',
  'Championship Rings',
  'Saturday Night Showcase',
  'Player of the Game Awards',
  'Covered by Next Up Studios',
];

export default function TournamentsOverview() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="inv-page tourney-overview-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <header className="tourney-hero">
        <div className="tourney-hero-inner">
          <p className="inv-eyebrow">Next Up Tournaments</p>
          <h1 className="tourney-title">Next Up Invitational.</h1>
          <p className="tourney-hero-copy">
            We want our tournaments to feel different from the moment teams walk in.
            The games matter, but the weekend around them matters too. That is the
            standard we are building toward.
          </p>
        </div>
      </header>

      <section className="tourney-standards">
        <div className="inv-section-head tourney-section-head">
          <span className="inv-num">01</span>
          <h2>Our Standard</h2>
        </div>
        <div className="tourney-standards-grid">
          {tournamentStandards.map((item) => (
            <article className="tourney-standard" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="tourney-events">
        <div className="inv-section-head tourney-section-head">
          <span className="inv-num">02</span>
          <h2>Our Invitationals</h2>
        </div>
        <div className="tourney-card-grid">
          {tournamentCards.map((event) => (
            <article className="tourney-card" key={event.title}>
              <div className="tourney-card-meta">
                <span>{event.season}</span>
                <span>{event.status}</span>
              </div>
              <h3>{event.title}</h3>
              <p>{event.text}</p>
              <Link className="tourney-card-link" to={event.to}>
                View Tournament
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="tourney-contact">
        <p>
          Interested in bringing your program to a Next Up tournament? Reach out and we
          will point you in the right direction.
        </p>
        <a href="mailto:info@nextuphoops.ca">info@nextuphoops.ca</a>
      </section>
    </motion.div>
  );
}

export function SpringInvitational() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="inv-page spring-coming-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <section className="spring-coming">
        <p className="inv-eyebrow">Next Up Spring Invitational</p>
        <h1>Coming Soon</h1>
        <p>
          Details for the Next Up Spring Invitational are still being finalized. We will
          post the full event information here when everything is ready.
        </p>
        <Link className="tourney-card-link" to="/Tournaments">
          Back to Tournaments
        </Link>
      </section>
    </motion.div>
  );
}

export function FallInvitational() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="inv-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >

      {/* ================= HERO ================= */}
      <header className="inv-hero">
        <div className="inv-hero-inner">
          <p className="inv-eyebrow">The Inaugural</p>
          <h1 className="inv-title">
            Next Up<br />
            <span>Fall Invitational</span>
          </h1>

          <div className="inv-hero-meta">
            <div>
              <span className="inv-meta-label">Dates</span>
              <span>October 2–4, 2026</span>
            </div>
            <div>
              <span className="inv-meta-label">Location</span>
              <span>Edmonton, Alberta</span>
            </div>
            <div>
              <span className="inv-meta-label">Format</span>
              <span>Invitation Only</span>
            </div>
          </div>
        </div>

        <div className="inv-hero-emblem">
          <svg
            className="inv-seal"
            viewBox="0 0 420 420"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Next Up Fall Invitational official seal with Next Up logo, Edmonton Alberta 2026"
          >
            <defs>
              <path id="invArcTop" d="M 72 210 A 138 138 0 0 1 348 210" />
              <path id="invArcBottom" d="M 82 210 A 128 128 0 0 0 338 210" />
            </defs>

            {/* rings */}
            <circle cx="210" cy="210" r="202" fill="none" stroke="#f2f2f2" strokeWidth="2" />
            <circle cx="210" cy="210" r="186" fill="none" stroke="#4a4a4e" strokeWidth="1" />
            <circle cx="210" cy="210" r="118" fill="none" stroke="#4a4a4e" strokeWidth="1" />

            {/* curved text */}
            <text className="inv-seal-arc" fill="#f2f2f2">
              <textPath href="#invArcTop" startOffset="50%" textAnchor="middle">
                NEXT UP FALL INVITATIONAL
              </textPath>
            </text>
            <text className="inv-seal-arc" fill="#f2f2f2">
              <textPath href="#invArcBottom" startOffset="50%" textAnchor="middle">
                EDMONTON · ALBERTA
              </textPath>
            </text>

            {/* side diamonds */}
            <rect x="24" y="204" width="12" height="12" transform="rotate(45 30 210)" fill="#f2f2f2" />
            <rect x="384" y="204" width="12" height="12" transform="rotate(45 390 210)" fill="#f2f2f2" />

            {/* center logo */}
            <image
              href="/final_logo.jpg"
              x="135"
              y="135"
              width="150"
              height="150"
              preserveAspectRatio="xMidYMid meet"
              className="inv-seal-logo"
            />
          </svg>

          <div className="inv-hero-tag">The Inaugural · October 2026</div>
        </div>
      </header>

      {/* ================= TICKER ================= */}
      <div className="inv-ticker" aria-hidden="true">
        <div className="inv-ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i}>{item} ·</span>
          ))}
        </div>
      </div>

      {/* ================= 01 THE FIRST CHAPTER ================= */}
      <section className="inv-section">
        <div className="inv-section-head">
          <span className="inv-num">01</span>
          <h2>The First Chapter</h2>
        </div>
        <div className="inv-section-body">
          <p>
            Every tradition has a first year. This is ours. In October 2026, the first
            Next Up Fall Invitational tips off in Edmonton. The programs that join us
            in year one will always be part of where this tournament began.
          </p>
          <p>
            Our staff has spent years at tournaments across Canada and the United States
            through the eyes of players, coaches, and parents. We paid attention to what
            made those weekends special. We also noticed what could be better. Then we
            built the tournament we always wished we were walking into.
          </p>
          <p>
            We are not chasing the biggest event in Alberta. We are building the
            tournament athletes look forward to and coaches trust. We want families to
            remember the weekend long after the final game. That standard shaped the
            way games are staffed, how championships are celebrated, and how the weekend
            feels after the last game on Saturday.
          </p>
          <p>
            Every game should feel organized. Every athlete should feel recognized. Every
            championship should feel worth earning. Every program should leave feeling
            like the weekend meant more than a schedule of games.
          </p>

          <div className="inv-callout">
            <p>
              The Invitational is invitation based. Not to keep programs out, but because
              we are building something worth being invited to. If your organization
              believes in player development and character, we want to hear from you. We
              are looking for programs that compete the right way and care about the
              experience athletes and families have all weekend.
            </p>
            <a href="mailto:info@nextuphoops.ca?subject=Next%20Up%20Fall%20Invitational%20-%20Request%20an%20Invitation">
              Request an Invitation
            </a>
          </div>

          {/* Placeholder: swap for official tournament photography when available */}
          <div className="inv-split-photo">
            <img
              src="https://res.cloudinary.com/dahquiy48/image/upload/f_auto,q_auto,w_1200/v1783538782/mancoach_yfkvxb.jpg"
              alt="Next Up Hoops coach with players"
              loading="lazy"
            />
            <div className="inv-photo-credit">Built by basketball people</div>
          </div>
        </div>
      </section>

      {/* ================= STATS BAND ================= */}
      <div className="inv-stats">
        <div className="inv-stats-inner">
          <div className="inv-stat">
            <strong>3</strong>
            <span>Days</span>
          </div>
          <div className="inv-stat">
            <strong>4</strong>
            <span>Games Guaranteed</span>
          </div>
          <div className="inv-stat">
            <strong>5</strong>
            <span>Divisions</span>
          </div>
          <div className="inv-stat">
            <strong>2</strong>
            <span>Venues</span>
          </div>
        </div>
      </div>

      {/* ================= 02 THE EXPERIENCE ================= */}
      <section className="inv-section">
        <div className="inv-section-head">
          <span className="inv-num">02</span>
          <h2>The Experience</h2>
        </div>
        <div className="inv-section-body">
          <p>Every team registration includes:</p>
          <div className="inv-ledger">
            <div className="inv-row">
              <span className="inv-row-num">1.</span>
              <h3>Four Guaranteed Games</h3>
              <p>Every team plays all weekend. Nobody travels for two games.</p>
            </div>
            <div className="inv-row">
              <span className="inv-row-num">2.</span>
              <h3>Certified Officials</h3>
              <p>Real competition needs real officiating, on every court.</p>
            </div>
            <div className="inv-row">
              <span className="inv-row-num">3.</span>
              <h3>Dedicated Scorekeepers</h3>
              <p>Professional game operations at every game, not just the finals.</p>
            </div>
            <div className="inv-row">
              <span className="inv-row-num">4.</span>
              <h3>Championship Bracket Play</h3>
              <p>Win your way in and play for something that counts.</p>
            </div>
            <div className="inv-row">
              <span className="inv-row-num">5.</span>
              <h3>Official Tournament Tee</h3>
              <p>Every registered athlete receives the inaugural tournament t-shirt.</p>
            </div>
            <div className="inv-row">
              <span className="inv-row-num">6.</span>
              <h3>Player of the Game</h3>
              <p>Awarded every game in every division, with a voucher for an exclusive Player of the Game tee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 03 SATURDAY NIGHT SHOWCASE (DARK) ================= */}
      <section className="inv-dark">
        <div className="inv-dark-inner">
          <div>
            <span className="inv-num">03</span>
            <h2>Saturday Night Showcase</h2>
            <p className="inv-dark-lead">
              When Saturday's games end, the building stays loud. The night belongs to
              the players, and every program can nominate athletes for All-Star
              consideration. We will also invite local scouts along with college and
              university coaches. The goal is to give athletes a chance to connect on
              Saturday night, then be seen again during championship games on Sunday.
            </p>
            <div className="inv-chips">
              <div className="inv-chip">Boys All-Star Game</div>
              <div className="inv-chip">Girls All-Star Game</div>
              <div className="inv-chip">Slam Dunk Contest</div>
              <div className="inv-chip">Three Point Contest</div>
              <div className="inv-chip">Scout &amp; Coach Networking</div>
              <div className="inv-chip">Championship Sunday Exposure</div>
              <div className="inv-chip">Prize Giveaways</div>
              <div className="inv-chip">Halftime Performers</div>
            </div>
            <p className="inv-dark-note">
              Plus t-shirt tosses, fan giveaways, and special guest performances
              throughout the night.
            </p>
          </div>

          {/* Placeholder: swap for official tournament photography when available */}
          <div className="inv-dark-photo">
            <div className="inv-dark-photo-frame">
              <img
                src="https://res.cloudinary.com/dahquiy48/image/upload/f_auto,q_auto:good,c_fill,g_north,h_1000,w_800/v1783556527/dunk-boy_ipkbbv.jpg"
                alt="Athlete finishing a dunk at the Saturday Night Showcase"
                loading="lazy"
              />
              <div className="inv-dark-photo-overlay" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= 04 CHAMPIONSHIPS & AWARDS ================= */}
      <section className="inv-section">
        <div className="inv-section-head">
          <span className="inv-num">04</span>
          <h2>Championships &amp; Awards</h2>
        </div>
        <div className="inv-section-body">
          <p>
            Division champions take home the trophy. Every player and coach on the
            championship roster earns an inaugural championship ring. Second and third
            place teams receive medals.
          </p>
          <div className="inv-awards-grid">
            <div className="inv-award-block">
              <h3>Team Awards</h3>
              <ul>
                <li><strong>Champions:</strong> trophy + inaugural rings for every player and coach</li>
                <li><strong>Second place:</strong> team medals</li>
                <li><strong>Third place:</strong> team medals</li>
              </ul>
            </div>
            <div className="inv-award-block">
              <h3>Individual Honors</h3>
              <ul>
                <li>Championship Game MVP</li>
                <li>All-Tournament Team</li>
                <li>Boys &amp; Girls All-Star MVP</li>
                <li>Slam Dunk Champion</li>
                <li>Three Point Champion</li>
              </ul>
            </div>
          </div>
          <p style={{ marginTop: '2rem' }}>
            Next Up Studios covers the full weekend: professional photography, highlight
            videos, player interviews, and behind-the-scenes content. If it happens here,
            it gets captured.
          </p>
        </div>
      </section>

      {/* ================= 05 TOURNAMENT INFO ================= */}
      <section className="inv-section">
        <div className="inv-section-head">
          <span className="inv-num">05</span>
          <h2>Tournament Information</h2>
        </div>
        <div className="inv-section-body">
          <dl className="inv-info-rows">
            <div className="inv-info-row">
              <dt>Dates</dt>
              <dd>October 2–4, 2026</dd>
            </div>
            <div className="inv-info-row">
              <dt>Venues</dt>
              <dd>The Centre Sports Complex &amp; EYBA Centre, Edmonton</dd>
            </div>
            <div className="inv-info-row">
              <dt>Open To</dt>
              <dd>Club teams, prep programs, basketball academies, and high-performance programs, by invitation</dd>
            </div>
          </dl>

          <div className="inv-div-group">Boys Divisions</div>
          <table className="inv-div-table">
            <tbody>
              <tr><td>U13</td><td>Born in 2014 or later</td></tr>
              <tr><td>U15</td><td>Born in 2012 or later</td></tr>
              <tr><td>U18</td><td>Born in 2009 or later</td></tr>
            </tbody>
          </table>

          <div className="inv-div-group">Girls Divisions</div>
          <table className="inv-div-table">
            <tbody>
              <tr><td>U15</td><td>Born in 2012 or later</td></tr>
              <tr><td>U18</td><td>Born in 2009 or later</td></tr>
            </tbody>
          </table>

          <p style={{ marginTop: '2.5rem' }}>
            Around the courts, expect official tournament merchandise, food and
            concessions, fan giveaways, and interactive experiences running all weekend.
            Exclusive inaugural merchandise will be available while supplies last.
          </p>
        </div>
      </section>

      {/* ================= 06 REGISTRATION ================= */}
      <section className="inv-section">
        <div className="inv-section-head">
          <span className="inv-num">06</span>
          <h2>Registration</h2>
        </div>
        <div className="inv-section-body">
          <p className="inv-reg-intro">
            Team entry is per roster and includes four games, tournament tees for every
            athlete, and full access to the Saturday Night Showcase.
          </p>
          <ul className="inv-fees">
            <li>
              <span className="inv-fee-label">Early bird</span>
              <span className="inv-fee-dates">through August 15</span>
              <span className="inv-fee-amount">$700 + GST</span>
            </li>
            <li>
              <span className="inv-fee-label">Standard</span>
              <span className="inv-fee-dates">August 16 to September 15</span>
              <span className="inv-fee-amount">$750 + GST</span>
            </li>
          </ul>
          <p className="inv-reg-note">
            Divisions are capped, and brackets close once they fill. Reach out and we will
            walk your program through the details.
          </p>
          <a
            className="inv-cta-btn"
            href="mailto:info@nextuphoops.ca?subject=Next%20Up%20Fall%20Invitational%20-%20Request%20an%20Invitation"
          >
            Request an Invitation
          </a>
          <a className="inv-cta-email" href="mailto:info@nextuphoops.ca">
            info@nextuphoops.ca
          </a>
        </div>
      </section>

      {/* ================= CLOSING ================= */}
      {/* Placeholder: swap for official tournament photography when available */}
      <div className="inv-closing">
        <img
          src="https://res.cloudinary.com/dahquiy48/image/upload/f_auto,q_auto,w_1600/v1767666268/girl-scream_xcxmkx.jpg"
          alt="Next Up Hoops celebration"
          loading="lazy"
        />
        <div className="inv-closing-overlay">
          <h2>Be part of the beginning.</h2>
          <p>
            The first year only happens once. We invite your program to be part of where
            this tournament starts.
          </p>
        </div>
      </div>

    </motion.div>
  );
}
