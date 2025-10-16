import React from 'react';
import { useNavigate } from 'react-router-dom';

const DemoHome = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    console.log('✅ Demo Home: Navigating to register page...');
    navigate('/register');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.logo}>
       <h6>
       EthioTelecom </h6>
        </div>
        <h1 style={styles.title}>Welcome to Registration System</h1>
        
        
        <button 
          onClick={handleRegisterClick}
          style={styles.button}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 8px 25px rgba(16, 185, 129, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.3)';
          }}
        >
           To Register
        </button>

        
      </div>
    </div>
  );
};

// Green and White inline styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdf9 50%, #d1fae5 100%)',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    padding: '3rem 2.5rem',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(6, 95, 70, 0.15), 0 8px 20px rgba(6, 95, 70, 0.1)',
    textAlign: 'center',
    maxWidth: '480px',
    width: '90%',
    border: '1px solid rgba(16, 185, 129, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  logo: {
    width: '80px',
    height: '80px',
    background: 'linear-gradient(135deg, #10b981, #059669)',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2.5rem',
    color: 'white',
    margin: '0 auto 1.5rem',
    boxShadow: '0 8px 20px rgba(16, 185, 129, 0.3)',
  },
  title: {
    fontSize: '2.2rem',
    color: '#065f46',
    marginBottom: '1rem',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #065f46, #047857)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#047857',
    marginBottom: '2.5rem',
    lineHeight: '1.6',
    fontWeight: '500',
  },
  button: {
    background: 'linear-gradient(135deg, #10b981, #059669)',
    color: 'white',
    border: 'none',
    padding: '1.2rem 2rem',
    fontSize: '1.2rem',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginBottom: '2rem',
    width: '100%',
    transition: 'all 0.3s ease',
    boxShadow: '0 6px 20px rgba(16, 185, 129, 0.3)',
    position: 'relative',
    overflow: 'hidden',
  },
  info: {
    background: 'linear-gradient(135deg, #f0fdf9, #ecfdf5)',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '2px solid rgba(16, 185, 129, 0.3)',
  },
  infoText: {
    margin: '0',
    color: '#065f46',
    fontSize: '0.95rem',
    lineHeight: '1.8',
    fontWeight: '600',
  },
};

// Add hover effect for the card
const cardStyle = document.createElement('style');
cardStyle.textContent = `
  .demo-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(6, 95, 70, 0.2), 0 12px 24px rgba(6, 95, 70, 0.15);
  }
`;
document.head.appendChild(cardStyle);

export default DemoHome;