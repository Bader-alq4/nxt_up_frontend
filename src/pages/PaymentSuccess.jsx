import { Link } from 'react-router-dom';
import { useState } from 'react';

function PaymentSuccess() {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 60px)', // adjust if you have a taller navbar
      background: '#f5f7fa',
      padding: '2rem',
    },
    card: {
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      padding: '3rem 2.5rem',
      maxWidth: '480px',
      width: '100%',
      textAlign: 'center',
    },
    title: {
      fontSize: '1.75rem',
      margin: '0 0 0.5rem',
      color: '#2d3748',
    },
    text: {
      fontSize: '1.1rem',
      color: '#4a5568',
      margin: 0,
    },
    button: {
      display: 'inline-block',
      marginTop: '2rem',
      background: isHovered ? '#0052a3' : '#0066cc',
      color: '#ffffff',
      padding: '0.75rem 1.5rem',
      borderRadius: '8px',
      textDecoration: 'none',
      fontWeight: 500,
      transition: 'background 0.2s ease, transform 0.2s ease',
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>Payment Successful!</h1>
        <p style={styles.text}>You’re officially registered for the tryouts. See you there!</p>
        <Link
          to="/dashboard"
          style={styles.button}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default PaymentSuccess;
