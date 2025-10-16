import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationPayment = () => {
  const [copied, setCopied] = useState(false);
  const phoneNumber = '0986658295';
  const accountName = 'Samuel';
  const amount = '200.00';

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePaymentConfirmation = () => {
    // Handle payment confirmation logic here
    alert('Payment confirmation submitted! We will verify your payment shortly.');
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Link to="/" style={styles.backButton}>
          ← Back to Home
        </Link>
        <h1 style={styles.title}>Registration Payment</h1>
        <p style={styles.subtitle}>Complete your SIM registration payment via Tele Birr</p>
      </div>

      <div style={styles.content}>
        <div style={styles.paymentCard}>
          <div style={styles.paymentHeader}>
            <h2 style={styles.paymentTitle}>Tele Birr Payment</h2>
            <div style={styles.amountBadge}>
              {amount} ETB
            </div>
          </div>

 

          <div style={styles.paymentDetails}>
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Payment Method:</span>
              <span style={styles.detailValue}>
                <span style={styles.teleBirrBadge}>Tele Birr</span>
              </span>
            </div>
            
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Receiver Name:</span>
              <span style={styles.detailValue}>{accountName}</span>
            </div>
            
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Amount:</span>
              <span style={styles.detailValue}>{amount} ETB</span>
            </div>
            
            <div style={styles.detailRow}>
              <span style={styles.detailLabel}>Phone Number:</span>
              <div style={styles.phoneSection}>
                <span style={styles.phoneNumber}>{phoneNumber}</span>
                <button 
                  onClick={copyPhoneNumber}
                  style={styles.copyButton}
                >
                  {copied ? '✓ Copied!' : ' Copy'}
                </button>
              </div>
            </div>
          </div>

          {copied && (
            <div style={styles.copiedMessage}>
              Phone number copied to clipboard! Paste it in your Tele Birr app.
            </div>
          )}

          
          <div style={styles.confirmationSection}>
            <h3 style={styles.confirmationTitle}>Payment Confirmation</h3>
            <p style={styles.confirmationText}>
              After completing the payment via Tele Birr, please click the button below to confirm your payment.
            </p>
            <button 
              onClick={handlePaymentConfirmation}
              style={styles.confirmButton}
            >
              ✅ I Have Completed the Payment
            </button>
          </div>

          <div style={styles.helpSection}>
            <div style={styles.helpIcon}>❓</div>
            <div>
              <strong>Need Help?</strong>
              <p>If you face any issues with payment, contact us at 0943419247 or join our Telegram channel.</p>
            </div>
          </div>
        </div>

        <div style={styles.infoSection}>
          <h3 style={styles.infoTitle}>Important Information</h3>
          <div style={styles.infoGrid}>
            <div style={styles.infoCard}>
              <h4>Payment Amount</h4>
              <p>{amount} ETB per SIM card registration</p>
            </div>
            <div style={styles.infoCard}>
              <h4>Processing Time</h4>
              <p>Account activated within 24 hours after payment verification</p>
            </div>
            <div style={styles.infoCard}>
              <h4>Support</h4>
              <p>Call 0943419247 for payment assistance</p>
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
    marginBottom: '0.5rem',
    fontWeight: '800',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#047857',
    fontWeight: '500',
  },
  content: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  paymentCard: {
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    padding: '2.5rem',
    boxShadow: '0 10px 30px rgba(6, 95, 70, 0.1)',
    marginBottom: '2rem',
  },
  paymentHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    paddingBottom: '1rem',
    borderBottom: '2px solid #e5e7eb',
  },
  paymentTitle: {
    color: '#065f46',
    fontSize: '1.5rem',
    fontWeight: '700',
    margin: 0,
  },
  amountBadge: {
    background: 'linear-gradient(135deg, #10b981, #059669)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '20px',
    fontWeight: '700',
    fontSize: '1.1rem',
  },
  instructions: {
    background: 'linear-gradient(135deg, #f0fdf9, #ecfdf5)',
    padding: '1.5rem',
    borderRadius: '12px',
    marginBottom: '2rem',
    border: '1px solid rgba(16, 185, 129, 0.3)',
  },
  instructionsTitle: {
    color: '#065f46',
    fontSize: '1.1rem',
    marginBottom: '1rem',
    fontWeight: '600',
  },
  instructionsList: {
    color: '#374151',
    lineHeight: '1.8',
    paddingLeft: '1.5rem',
    margin: 0,
  },
  paymentDetails: {
    background: '#f8fafc',
    padding: '1.5rem',
    borderRadius: '12px',
    marginBottom: '1.5rem',
    border: '1px solid #e2e8f0',
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid #f1f5f9',
  },
  detailLabel: {
    color: '#64748b',
    fontWeight: '500',
    fontSize: '0.95rem',
  },
  detailValue: {
    color: '#1e293b',
    fontWeight: '600',
  },
  teleBirrBadge: {
    background: 'linear-gradient(135deg, #0088cc, #00a8ff)',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: '600',
  },
  phoneSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  phoneNumber: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#065f46',
    fontFamily: 'monospace',
  },
  copyButton: {
    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  copiedMessage: {
    background: 'linear-gradient(135deg, #10b981, #059669)',
    color: 'white',
    padding: '1rem',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: '1.5rem',
    fontWeight: '500',
    animation: 'fadeIn 0.5s ease',
  },
  qrSection: {
    textAlign: 'center',
    marginBottom: '2rem',
    padding: '1.5rem',
    background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
    borderRadius: '12px',
  },
  qrTitle: {
    color: '#065f46',
    marginBottom: '1rem',
    fontWeight: '600',
  },
  qrPlaceholder: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  qrCode: {
    width: '150px',
    height: '150px',
    background: 'linear-gradient(135deg, #e5e7eb, #d1d5db)',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px dashed #9ca3af',
  },
  qrText: {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#4b5563',
    marginBottom: '0.5rem',
  },
  qrInfo: {
    fontSize: '0.8rem',
    color: '#6b7280',
    textAlign: 'center',
  },
  qrNote: {
    fontSize: '0.9rem',
    color: '#6b7280',
    fontStyle: 'italic',
  },
  confirmationSection: {
    background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
    padding: '2rem',
    borderRadius: '15px',
    textAlign: 'center',
    marginBottom: '1.5rem',
    border: '1px solid #f59e0b',
  },
  confirmationTitle: {
    color: '#92400e',
    fontSize: '1.2rem',
    marginBottom: '1rem',
    fontWeight: '600',
  },
  confirmationText: {
    color: '#92400e',
    marginBottom: '1.5rem',
    lineHeight: '1.5',
  },
  confirmButton: {
    background: 'linear-gradient(135deg, #10b981, #059669)',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '10px',
    fontSize: '1.1rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width: '100%',
  },
  helpSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    background: '#f8fafc',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
  },
  helpIcon: {
    fontSize: '2rem',
  },
  infoSection: {
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '15px',
    padding: '2rem',
  },
  infoTitle: {
    color: '#065f46',
    marginBottom: '1.5rem',
    fontWeight: '600',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem',
  },
  infoCard: {
    background: '#f0fdf9',
    padding: '1rem',
    borderRadius: '10px',
    textAlign: 'center',
    border: '1px solid rgba(16, 185, 129, 0.3)',
  },
};

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .copy-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
  }
  
  .confirm-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
  }
`;
document.head.appendChild(style);

export default RegistrationPayment;