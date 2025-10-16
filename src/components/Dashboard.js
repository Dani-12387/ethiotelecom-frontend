import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getHomeData } from '../services/api';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await getHomeData();
        setHomeData(response.data);
      } catch (error) {
        console.error('Error fetching home data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome, {user?.username}! 🎉</h1>
        <button onClick={logout} className="btn-secondary">
          Logout
        </button>
      </div>
      
      <div className="dashboard-content">
        <div className="profile-card">
          <h3>Student Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <label>Username:</label>
              <span>{user?.username}</span>
            </div>
            <div className="info-item">
              <label>Phone:</label>
              <span>{user?.phone}</span>
            </div>
            <div className="info-item">
              <label>School:</label>
              <span>{user?.school}</span>
            </div>
            <div className="info-item">
              <label>Student ID:</label>
              <span>{user?.id || 'N/A'}</span>
            </div>
          </div>
        </div>

        {homeData && (
          <div className="dashboard-stats">
            <h3>Dashboard Overview</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <h4>Total Students</h4>
                <p className="stat-number">{homeData.dashboard?.totalStudents || 150}</p>
              </div>
              <div className="stat-card">
                <h4>Active Courses</h4>
                <p className="stat-number">{homeData.dashboard?.activeCourses || 5}</p>
              </div>
              <div className="stat-card">
                <h4>Upcoming Events</h4>
                <p className="stat-number">{homeData.dashboard?.upcomingEvents || 3}</p>
              </div>
            </div>
            <div className="welcome-message">
              <p>{homeData.dashboard?.welcomeMessage || "Welcome to EthioTelecom Student Portal!"}</p>
            </div>
          </div>
        )}

        {loading && (
          <div className="loading">Loading dashboard data...</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;