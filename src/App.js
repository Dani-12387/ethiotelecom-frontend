import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import DemoHome from './components/DemoHome';
import AboutHelp from './components/AboutHelp';
import RegistrationPayment from './components/RegistrationPayment';
import './App.css';
import ethioTelecomLogo from './assets/ethiotelecom-logo.png';

// Telegram Button Component
const TelegramButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show button after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const openTelegram = () => {
    window.open('https://t.me/ETHIOTELECOMSIMREGISTER', '_blank');
  };

  return (
    <div 
      style={{
        ...telegramButtonStyles.container,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={openTelegram}
    >
      <div style={telegramButtonStyles.icon}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.78 5.42-.9 6.8-.06.67-.36.89-.86.55-2.45-1.83-3.74-2.98-6.04-4.78-.53-.41-.91-.62-.88-1.01.03-.38.43-.54.98-.78 3.47-1.5 5.77-2.47 8.7-3.72.52-.22.99-.1.78.46z"/>
        </svg>
      </div>
      
      {isHovered && (
        <div style={telegramButtonStyles.tooltip}>
          Join our Telegram for support
        </div>
      )}
      
      {/* Pulsating ring effect */}
      <div style={{
        ...telegramButtonStyles.pulseRing,
        animation: 'pulse 2s infinite'
      }} />
    </div>
  );
};

// Telegram Button Styles
const telegramButtonStyles = {
  container: {
    position: 'fixed',
    bottom: '25px',
    right: '25px',
    width: '60px',
    height: '60px',
    backgroundColor: '#0088cc',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 8px 25px rgba(0, 136, 204, 0.4)',
    zIndex: 1000,
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    border: '3px solid white',
    animation: 'bounce 2s infinite',
  },
  icon: {
    color: 'white',
    fontSize: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tooltip: {
    position: 'absolute',
    right: '70px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  pulseRing: {
    position: 'absolute',
    top: '-5px',
    left: '-5px',
    right: '-5px',
    bottom: '-5px',
    border: '2px solid #0088cc',
    borderRadius: '50%',
    opacity: 0.6,
  },
};

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Public Route component
const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? children : <Navigate to="/dashboard" />;
};

// Header Component with Navigation Buttons
const Header = () => {
  return (
    <div style={headerStyles.container}>
      <div style={headerStyles.buttonsContainer}>
        <Link to="/about-help" style={headerStyles.button}>
          About/Help
        </Link>
        <Link to="/registration-payment" style={headerStyles.button}>
          Registration Payment
        </Link>
      </div>
    </div>
  );
};

// Attractive Home Component with Green & White Theme
const Home = () => {
  const handleImageError = (e) => {
    // Hide the broken image and show fallback
    e.target.style.display = 'none';
    // Show the fallback text
    const fallback = document.getElementById('logo-fallback');
    if (fallback) {
      fallback.style.display = 'flex';
    }
  };

  return (
    <div style={homeStyles.container}>
      {/* Header with Navigation Buttons */}
      <Header />
      
      {/* Background decorative elements */}
      <div style={homeStyles.bubble1}></div>
      <div style={homeStyles.bubble2}></div>
      <div style={homeStyles.bubble3}></div>
      
      <div style={homeStyles.card}>
        {/* Logo Section */}
        <div style={homeStyles.logoSection}>
          <div style={homeStyles.logo}>
            {/* Try multiple logo paths */}
            <img 
              src="/ethiotelecom-logo.png" 
              alt="EthioTelecom" 
              style={homeStyles.logoImage}
              onError={handleImageError}
            />
            <img 
              src="/logo.png" 
              alt="EthioTelecom" 
              style={homeStyles.logoImage}
              onError={handleImageError}
            />
            <img 
              src="./ethiotelecom-logo.png" 
              alt="EthioTelecom" 
              style={homeStyles.logoImage}
              onError={handleImageError}
            />
            
            {/* Fallback text that will show if images fail */}
            <div id="logo-fallback" style={homeStyles.logoFallback}>
              EthioTelecom
            </div>
          </div>
          <h1 style={homeStyles.title}>Welcome to EthioTelecom SIM CARD Registration Portal</h1>
        </div>

        {/* Action Buttons */}
        <div style={homeStyles.buttonSection}>
          <Link to="/register" style={homeStyles.primaryButton}>
            Login to Account
          </Link>
          <Link to="/demo-home" style={homeStyles.secondaryButton}>
            ለማስመዝገብ | Register Now
          </Link>
        </div>

        {/* Quick Telegram Link */}
        <div style={homeStyles.telegramSection}>
          <p style={homeStyles.telegramText}>
            Need help? Join our Telegram channel for instant support
          </p>
          <button 
            onClick={() => window.open('https://t.me/ETHIOTELECOMSIMREGISTER', '_blank')}
            style={homeStyles.telegramLink}
          >
            <span style={homeStyles.telegramIcon}>✈️</span>
            Join Telegram Support
          </button>
        </div>
      </div>
    </div>
  );
};

// Header Styles
const headerStyles = {
  container: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    zIndex: 1000,
  },
  buttonsContainer: {
    display: 'flex',
    gap: '15px',
  },
  button: {
    padding: '12px 24px',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    color: '#065f46',
    textDecoration: 'none',
    borderRadius: '12px',
    fontWeight: '600',
    fontSize: '14px',
    border: '2px solid rgba(16, 185, 129, 0.3)',
    boxShadow: '0 4px 12px rgba(6, 95, 70, 0.15)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
};

// Home Page Styles
const homeStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdf9 50%, #d1fae5 100%)',
    padding: '20px',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  bubble1: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: '200px',
    height: '200px',
    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'float 6s ease-in-out infinite',
  },
  bubble2: {
    position: 'absolute',
    bottom: '15%',
    right: '10%',
    width: '150px',
    height: '150px',
    background: 'radial-gradient(circle, rgba(5, 150, 105, 0.08) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'float 8s ease-in-out infinite reverse',
  },
  bubble3: {
    position: 'absolute',
    top: '50%',
    left: '70%',
    width: '100px',
    height: '100px',
    background: 'radial-gradient(circle, rgba(6, 95, 70, 0.06) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'float 10s ease-in-out infinite',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    padding: '3rem 2.5rem',
    borderRadius: '24px',
    boxShadow: `
      0 25px 50px rgba(6, 95, 70, 0.15),
      0 10px 20px rgba(6, 95, 70, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.9)
    `,
    textAlign: 'center',
    maxWidth: '500px',
    width: '90%',
    border: '1px solid rgba(16, 185, 129, 0.3)',
    position: 'relative',
    zIndex: 1,
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  logoSection: {
    marginBottom: '2rem',
  },
  logo: {
    width: '120px',
    height: '120px',
    background: 'transparent',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.5rem',
    boxShadow: '0 8px 20px rgba(16, 185, 129, 0.2)',
    position: 'relative',
    overflow: 'hidden',
    border: '2px solid rgba(16, 185, 129, 0.2)',
  },
  logoImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    padding: '10px',
    borderRadius: '18px',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  logoFallback: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #10b981, #059669)',
    display: 'none', // Hidden by default, shown only if images fail
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.9rem',
    color: 'white',
    borderRadius: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '10px',
    lineHeight: '1.2',
  },
  title: {
    fontSize: '1.8rem',
    color: '#065f46',
    marginBottom: '1rem',
    fontWeight: '800',
    lineHeight: '1.3',
  },
  buttonSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '2rem',
  },
  primaryButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    background: 'linear-gradient(135deg, #10b981, #059669)',
    color: 'white',
    textDecoration: 'none',
    padding: '1.25rem 2rem',
    borderRadius: '14px',
    fontSize: '1.1rem',
    fontWeight: '700',
    transition: 'all 0.3s ease',
    boxShadow: '0 6px 20px rgba(16, 185, 129, 0.3)',
    border: 'none',
    cursor: 'pointer',
  },
  secondaryButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    background: 'white',
    color: '#065f46',
    textDecoration: 'none',
    padding: '1.25rem 2rem',
    borderRadius: '14px',
    fontSize: '1.1rem',
    fontWeight: '700',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)',
    border: '2px solid #10b981',
    cursor: 'pointer',
  },
  telegramSection: {
    marginTop: '1.5rem',
    padding: '1.5rem',
    background: 'linear-gradient(135deg, #f0fdf9, #ecfdf5)',
    borderRadius: '12px',
    border: '1px solid rgba(16, 185, 129, 0.2)',
  },
  telegramText: {
    margin: '0 0 1rem 0',
    color: '#065f46',
    fontSize: '0.9rem',
    fontWeight: '500',
  },
  telegramLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    background: 'linear-gradient(135deg, #0088cc, #00a8ff)',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    width: '100%',
  },
  telegramIcon: {
    fontSize: '1rem',
  },
};

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
  
  /* Add hover effects for header buttons */
  .header-button:hover {
    background: #10b981 !important;
    color: white !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4) !important;
  }
  
  /* Telegram button animations */
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.6;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.3;
    }
    100% {
      transform: scale(1);
      opacity: 0.6;
    }
  }
  
  /* Hover effects for telegram button */
  .telegram-button:hover {
    transform: scale(1.1) translateY(-2px);
    box-shadow: 0 12px 30px rgba(0, 136, 204, 0.6);
  }
  
  /* Home page button hover effects */
  .home-primary-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
  }
  
  .home-secondary-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
    background: #10b981;
    color: white;
  }
  
  .telegram-link-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 136, 204, 0.4);
  }
`;
document.head.appendChild(style);

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          {/* Global Telegram Button - appears on all pages */}
          <TelegramButton />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/login" 
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              } 
            />
            <Route 
              path="/register" 
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="/demo-home" element={<DemoHome />} />
            <Route path="/about-help" element={<AboutHelp />} />
            <Route path="/registration-payment" element={<RegistrationPayment />} />
          </Routes>
          <ToastContainer 
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            toastStyle={{
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '500',
            }}
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;