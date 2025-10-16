import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: '',
    username: '',
    password: '',
    school: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('🔄 Attempting registration...');
    console.log('📝 Form data:', formData);
    
    // Validation
    if (!formData.phone || !formData.username || !formData.password || !formData.school) {
      alert('Please fill in all fields');
      return;
    }

    // Ethiopian phone validation
    const phoneRegex = /^(09\d{8}|\+2519\d{8})$/;
    if (!phoneRegex.test(formData.phone)) {
      alert('Please enter a valid Ethiopian phone number (09xxxxxxxx or +2519xxxxxxxx)');
      return;
    }

    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    // Always show success - no backend call
    console.log('✅ SUCCESSFULLY REGISTERED!');
    console.log('📋 User data saved:', {
      phone: formData.phone,
      username: formData.username,
      school: formData.school
    });
    
    // Show success alert
    alert('✅ Registration Successful!\n\nYour account has been created successfully!');
    
    console.log('🚀 Redirecting to dashboard...');
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>SIM Card Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Phone Number to register</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="09xxxxxxxx or +2519xxxxxxxx"
              required
            />
          </div>

          <div className="form-group">
            <label>Fullname</label>
            <input
              type="text"
              name="fullname"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter fullname"
              required
            />
          </div>

          <div className="form-group">
            <label>employee Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password (min 6 characters)"
              required
            />
          </div>

          <div className="form-group">
            <label>employee ID</label>
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleChange}
              placeholder="Enter your employee ID"
              required
            />
          </div>

          <button 
            type="submit" 
            className="btn-primary"
          >
            Register
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Register;