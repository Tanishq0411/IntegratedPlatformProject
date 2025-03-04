// import React from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="logo">
//         <img src="your-logo-path" alt="Logo" />
//       </div>
//       <div className="searchbox">
//         <input type="text" placeholder="Search..."/>
//         <button>Search</button>
//       </div>
//       <div className="login-btn">
//         <button>Login/Signup</button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import './Navbar.css';

// const Navbar = ({ topicsList }) => {
//   // State for the search input and the filtered results
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredTopics, setFilteredTopics] = useState([]);

//   // Handle the search input change
//   const handleSearchChange = (event) => {
//     const query = event.target.value;
//     setSearchTerm(query);

//     // Filter topics based on the search term
//     if (query) {
//       const results = topicsList.filter(topic =>
//         topic.toLowerCase().includes(query.toLowerCase())
//       );
//       setFilteredTopics(results);
//     } else {
//       setFilteredTopics([]);
//     }
//   };

//   return (
//     <div className="navbar">
//       <div className="logo">
//         <img src="your-logo-path" alt="Logo" />
//       </div>
//       <div className="searchbox">
//         <input 
//           type="text" 
//           placeholder="Search..." 
//           value={searchTerm} 
//           onChange={handleSearchChange} 
//         />
//         <button>Search</button>
//       </div>

//       {/* Display filtered results if any */}
//       {filteredTopics.length > 0 && (
//         <div className="search-suggestions">
//           <ul>
//             {filteredTopics.map((topic, index) => (
//               <li key={index}>{topic}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       <div className="login-btn">
//         <button>Login/Signup</button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ topicsList }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTopics, setFilteredTopics] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    if (query) {
      const results = topicsList.filter((topic) =>
        topic.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTopics(results);
    } else {
      setFilteredTopics([]);
    }
  };

  const handlePopupToggle = () => setIsPopupVisible(!isPopupVisible);
  const handleClosePopup = () => setIsPopupVisible(false);

  const toggleForm = () => setIsLoginForm(!isLoginForm);

  return (
    <div className="navbar">
      <div className="logo">
        <img src="your-logo-path" alt="Logo" />
      </div>
      <div className="searchbox">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button>Search</button>
      </div>

      {filteredTopics.length > 0 && (
        <div className="search-suggestions">
          <ul>
            {filteredTopics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="login-btn">
        <button onClick={handlePopupToggle}>Login/Signup</button>
      </div>

      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-header">
              <h2>{isLoginForm ? 'Login' : 'Signup'}</h2>
              <button className="close-btn" onClick={handleClosePopup}>
                &times;
              </button>
            </div>
            <div className="popup-body">
              <div className="form-toggle">
                <button
                  className={isLoginForm ? 'active' : ''}
                  onClick={toggleForm}
                >
                  Login
                </button>
                <button
                  className={!isLoginForm ? 'active' : ''}
                  onClick={toggleForm}
                >
                  Signup
                </button>
              </div>

              {isLoginForm ? (
                <form>
                  <label>Email:</label>
                  <input type="email" placeholder="Enter your email" />
                  <label>Password:</label>
                  <input type="password" placeholder="Enter your password" />
                  <button type="submit">Login</button>
                </form>
              ) : (
                <form>
                  <label>Username:</label>
                  <input type="text" placeholder="Enter your username" />
                  <label>Email:</label>
                  <input type="email" placeholder="Enter your email" />
                  <label>Password:</label>
                  <input type="password" placeholder="Enter your password" />
                  <label>Confirm Password:</label>
                  <input type="password" placeholder="Confirm your password" />
                  <button type="submit">Signup</button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;



