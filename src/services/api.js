import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
});

// Add token to requests
API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

// Register student - maps frontend fields to backend fields
export const registerStudent = (studentData) => API.post('/auth/register', {
  phoneNumber: studentData.phone,
  userName: studentData.username,
  password: studentData.password,
  school: studentData.school
});

// Login student
export const loginStudent = (loginData) => API.post('/auth/login', {
  phoneNumber: loginData.phone,
  password: loginData.password
});

// Get student profile
export const getStudentProfile = () => API.get('/auth/status');

// Get home data (protected)
export const getHomeData = () => API.get('/home');