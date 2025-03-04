import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="your-logo-path" alt="Logo" />
      </div>
      <div className="searchbox">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className="login-btn">
        <button>Login/Signup</button>
      </div>
    </div>
  );
};

export default Navbar;
