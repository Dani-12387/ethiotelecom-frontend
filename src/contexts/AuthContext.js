import React, { createContext, useState, useContext, useEffect } from 'react';
import { registerStudent, loginStudent, getStudentProfile } from '../services/api';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Register function
  const register = async (userData) => {
    setLoading(true);
    try {
      const response = await registerStudent(userData);
      const { user: backendUser, token } = response.data;
      
      // Map backend user to frontend user format
      const frontendUser = {
        id: backendUser.id,
        phone: backendUser.phoneNumber,
        username: backendUser.userName,
        school: backendUser.school
      };
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(frontendUser));
      setUser(frontendUser);
      
      toast.success('Registration successful! Welcome! 🎉');
      setLoading(false);
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || 'Registration failed';
      toast.error(message);
      setLoading(false);
      return { success: false, message };
    }
  };

  // Login function
  const login = async (phone, password) => {
    setLoading(true);
    try {
      const response = await loginStudent({ phone, password });
      const { user: backendUser, token } = response.data;
      
      // Map backend user to frontend user format
      const frontendUser = {
        id: backendUser.id,
        phone: backendUser.phoneNumber,
        username: backendUser.userName,
        school: backendUser.school
      };
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(frontendUser));
      setUser(frontendUser);
      
      toast.success('Login successful! 🎉');
      setLoading(false);
      return { success: true };
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed';
      toast.error(message);
      setLoading(false);
      return { success: false, message };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    toast.info('Logged out successfully');
  };

  // Check if user is logged in on app start
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const value = {
    user,
    register,
    login,
    logout,
    loading,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};