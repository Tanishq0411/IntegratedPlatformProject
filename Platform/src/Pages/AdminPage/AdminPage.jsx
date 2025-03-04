// src/pages/AdminPage.jsx
import React, { useState } from 'react';
import Form from '../../Components/LoginForm/Form';
import VideoBackground from '../../Components/VideoBackground/VideoBackground';
import './AdminPage.css';

const AdminPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login/signup

  return (
    <div className="admin-page">
      <VideoBackground />
      <div className="form-wrapper">
        <Form isLogin={isLogin} />
        <div className="toggle">
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Switch to Signup' : 'Switch to Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
