import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

export default function RegistrationCall() {
  return (
    <section
      className="relative text-center overflow-hidden shadow-xl border-2 text-white mb-10"
      style={{
        borderColor: '#60a5fa',
        // backgroundColor: 'white',
        maxWidth: '900px',
        margin: '2rem auto',
        padding: '3rem 2rem',
        borderRadius: '0rem', // more curved
      }}
    >
      <div className="tryouts-now-open" style={{ padding: 0 }}>
        <h1
          className="mb-4 text-white"
          style={{
            fontSize: '4rem',
            fontWeight: '800',
            lineHeight: '1.1',
          }}
        >
          Tryouts Now
          <br />
          <span>Open</span>
        </h1>

        <Link
          to="/tryout"
          className="tryout-reg-button"
        >
          Register for Tryouts
          <Users className="tryout-reg-button" />
        </Link>
      </div>
    </section>
  );
}
