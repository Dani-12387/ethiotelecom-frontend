import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.phone || !formData.password) {
      alert('Please fill in all fields');
      return;
    }

    // Ethiopian phone validation
    const phoneRegex = /^(09\d{8}|\+2519\d{8})$/;
    if (!phoneRegex.test(formData.phone)) {
      alert('Please enter a valid Ethiopian phone number (09xxxxxxxx or +2519xxxxxxxx)');
      return;
    }

    const result = await login(formData.phone, formData.password);
    
    if (result.success) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Student Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="09xxxxxxxx or +2519xxxxxxxx"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              disabled={loading}
            />
          </div>

          <button 
            type="submit" 
            className="btn-primary"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;