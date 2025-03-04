import React, { useState } from 'react';
import './Navside.css';
import { Link } from 'react-router-dom';
const Navside = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <nav>
        <div className="search">
          <input
            className='inputsearch'
            type="text"
            placeholder='Search'
          />
          <button className="searchbtn"></button>
        </div>
        <button className='login'>Login/ SignUp</button>
      </nav>

      <div className="Sidebar">
        <button className='btn' id='btn1'>LOGO</button>
        
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            Computer Science
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
             <Link to="/Ai" ><button className="dropdown-item">AI</button></Link>
             <Link to="/dbms" ><button className="dropdown-item">DBMS</button></Link>
             <Link to="/dccn" ><button className="dropdown-item">DCCN</button></Link>
             <Link to="/os" ><button className="dropdown-item">OS</button></Link>
              
             
            </div>
          )}
        </div>

        Content
      </div>
    </div>
  );
};

export default Navside;