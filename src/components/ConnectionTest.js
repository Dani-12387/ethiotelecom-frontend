// src/components/ConnectionTest.js
import React, { useState } from 'react';
import axios from 'axios';

const ConnectionTest = () => {
  const [testResult, setTestResult] = useState('');

  const testConnection = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/auth/test');
      setTestResult(`✅ SUCCESS: ${JSON.stringify(response.data)}`);
    } catch (error) {
      setTestResult(`❌ ERROR: ${error.message}`);
    }
  };

  const testRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/register', {
        phoneNumber: '0912345678',
        userName: 'testuser',
        password: 'password123',
        school: 'Test School'
      });
      setTestResult(`✅ REGISTER SUCCESS: ${JSON.stringify(response.data)}`);
    } catch (error) {
      setTestResult(`❌ REGISTER ERROR: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Connection Test</h2>
      <button onClick={testConnection}>Test Backend Connection</button>
      <button onClick={testRegister} style={{ marginLeft: '10px' }}>Test Registration</button>
      {testResult && (
        <pre style={{ 
          marginTop: '20px', 
          padding: '10px', 
          backgroundColor: testResult.includes('✅') ? '#e8f5e8' : '#ffe8e8',
          border: '1px solid #ccc'
        }}>
          {testResult}
        </pre>
      )}
    </div>
  );
};

export default ConnectionTest;