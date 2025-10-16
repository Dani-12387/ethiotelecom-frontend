import React from 'react';
import { Link } from 'react-router-dom';

const AboutHelp = () => {
  const handlePhoneCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`);
  };

  const openTelegram = () => {
    window.open('https://t.me/ETHIOTELECOMSIMREGISTER', '_blank');
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Link to="/" style={styles.backButton}>
          ← Back to Home
        </Link>
        <h1 style={styles.title}>About & Help</h1>
      </div>

      <div style={styles.content}>
        

       
        {/* Contact Information Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact & Support</h2>
          <div style={styles.contactGrid}>
            <div style={styles.contactCard}>
              <div style={styles.contactIcon}>📞</div>
              <h3 style={styles.contactTitle}>Phone Support</h3>
              <p style={styles.contactDescription}>
                Call us for immediate assistance with SIM registration
              </p>
              <div style={styles.phoneNumbers}>
                <button 
                  onClick={() => handlePhoneCall('0943419247')}
                  style={styles.phoneButton}
                >
                  📞 0943419247
                </button>
                <button 
                  onClick={() => handlePhoneCall('990')}
                  style={styles.phoneButton}
                >
                  📞 Short Code: 990
                </button>
              </div>
              <p style={styles.availability}>
                Available 24/7 for customer support
              </p>
            </div>

            <div style={styles.contactCard}>
              <div style={styles.contactIcon}>✈️</div>
              <h3 style={styles.contactTitle}>Telegram Channel</h3>
              <p style={styles.contactDescription}>
                Join our official Telegram channel for updates and support
              </p>
              <button 
                onClick={openTelegram}
                style={styles.telegramButton}
              >
                ✈️ Join Telegram Channel
              </button>
              <p style={styles.channelInfo}>
                Get real-time updates, FAQs, and direct support
              </p>
            </div>

            <div style={styles.contactCard}>
              <div style={styles.contactIcon}>🏢</div>
              <h3 style={styles.contactTitle}>Visit Our Office</h3>
              <p style={styles.contactDescription}>
                Get in-person support at any EthioTelecom branch
              </p>
              <div style={styles.officeInfo}>
                <p style={styles.officeText}>
                  <strong>Location:</strong> Nearest EthioTelecom office
                </p>
                <p style={styles.officeText}>
                  <strong>Hours:</strong> 8:30 AM - 5:30 PM (Mon-Fri)
                </p>
                <p style={styles.officeText}>
                  <strong>Services:</strong> SIM registration, troubleshooting, support
                </p>
              </div>
            </div>
          </div>
        </div>

      

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Quick Support Access</h2>
          <div style={styles.quickSupport}>
            <div style={styles.supportCard}>
              <h4 style={styles.supportTitle}>Urgent Assistance</h4>
              <p>Need immediate help? Call us now:</p>
              <div style={styles.emergencyContacts}>
                <button 
                  onClick={() => handlePhoneCall('0943419247')}
                  style={styles.emergencyButton}
                >
                  🚨 Call 0943419247
                </button>
                <button 
                  onClick={() => handlePhoneCall('990')}
                  style={styles.emergencyButton}
                >
                  🚨 Call 990 (Short Code)
                </button>
              </div>
            </div>
            <div style={styles.supportCard}>
              <h4 style={styles.supportTitle}>Online Support</h4>
              <p>Join our Telegram channel for updates:</p>
              <button 
                onClick={openTelegram}
                style={styles.telegramQuickButton}
              >
                ✈️ Open Telegram
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdf9 100%)',
    padding: '20px',
    fontFamily: "'Inter', sans-serif",
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: '0',
    top: '0',
    padding: '10px 20px',
    background: '#10b981',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  },
  title: {
    fontSize: '2.5rem',
    color: '#065f46',
    marginBottom: '1rem',
    fontWeight: '800',
  },
  content: {
    maxWidth: '1000px',
    margin: '0 auto',
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    padding: '3rem',
    boxShadow: '0 10px 30px rgba(6, 95, 70, 0.1)',
  },
  section: {
    marginBottom: '3rem',
  },
  sectionTitle: {
    color: '#065f46',
    fontSize: '1.5rem',
    marginBottom: '1.5rem',
    fontWeight: '700',
    borderBottom: '2px solid #10b981',
    paddingBottom: '0.5rem',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#374151',
    marginBottom: '1rem',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  },
  featureCard: {
    background: 'linear-gradient(135deg, #f0fdf9, #ecfdf5)',
    padding: '2rem',
    borderRadius: '15px',
    textAlign: 'center',
    border: '1px solid rgba(16, 185, 129, 0.3)',
    transition: 'transform 0.3s ease',
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  // Contact Section Styles
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '1rem',
  },
  contactCard: {
    background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
    padding: '2rem',
    borderRadius: '15px',
    textAlign: 'center',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease',
  },
  contactIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  contactTitle: {
    color: '#065f46',
    fontSize: '1.2rem',
    marginBottom: '1rem',
    fontWeight: '600',
  },
  contactDescription: {
    color: '#4b5563',
    marginBottom: '1.5rem',
    lineHeight: '1.5',
  },
  phoneNumbers: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '1rem',
  },
  phoneButton: {
    background: 'linear-gradient(135deg, #10b981, #059669)',
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'block',
  },
  telegramButton: {
    background: 'linear-gradient(135deg, #0088cc, #00a8ff)',
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'block',
    width: '100%',
    marginBottom: '1rem',
  },
  channelInfo: {
    fontSize: '0.9rem',
    color: '#6b7280',
    fontStyle: 'italic',
  },
  availability: {
    fontSize: '0.9rem',
    color: '#059669',
    fontWeight: '500',
  },
  officeInfo: {
    textAlign: 'left',
  },
  officeText: {
    margin: '0.5rem 0',
    color: '#4b5563',
    fontSize: '0.95rem',
  },
  // FAQ Styles
  faqList: {
    spaceY: '1rem',
  },
  faqItem: {
    background: '#f8fafc',
    padding: '1.5rem',
    borderRadius: '12px',
    marginBottom: '1rem',
    borderLeft: '4px solid #10b981',
  },
  faqQuestion: {
    color: '#065f46',
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
    fontWeight: '600',
  },
  faqAnswer: {
    color: '#4b5563',
    lineHeight: '1.5',
  },
  // Quick Support Styles
  quickSupport: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  supportCard: {
    background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
    padding: '2rem',
    borderRadius: '15px',
    textAlign: 'center',
    border: '1px solid #f59e0b',
  },
  supportTitle: {
    color: '#92400e',
    fontSize: '1.2rem',
    marginBottom: '1rem',
    fontWeight: '600',
  },
  emergencyContacts: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '1rem',
  },
  emergencyButton: {
    background: 'linear-gradient(135deg, #dc2626, #ef4444)',
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  telegramQuickButton: {
    background: 'linear-gradient(135deg, #0088cc, #00a8ff)',
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '1rem',
    width: '100%',
  },
};

// Add hover effects
const style = document.createElement('style');
style.textContent = `
  .phone-button:hover, .telegram-button:hover, .emergency-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
  
  .contact-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(6, 95, 70, 0.15);
  }
  
  .feature-card:hover {
    transform: translateY(-5px);
  }
`;
document.head.appendChild(style);

export default AboutHelp;