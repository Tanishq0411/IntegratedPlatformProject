// src/Components/Sidebar/Sidebar.jsx
import React from 'react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleButtonClick = (topic) => {
    navigate(`/${topic}`);
  };

  return (
    <div className="sidebar">
      <button className="sidebar-btn" onClick={() => handleButtonClick('ai')}>AI</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('dbms')}>DBMS</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('cyber-security')}>Cyber Security</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('machine-learning')}>Machine Learning</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('robotics')}>Robotics</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('java')}>JAVA</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('python')}>Python</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('cpp')}>C++</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('c')}>C</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('javascript')}>Javascript</button>
    </div>
  );
};

export default Sidebar;
