import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    axios.get('http://localhost:5001/getsubjects')
      .then(response => {
        console.log("Fetched subjects:", response.data);
        setSubjects(response.data.data);
        setLoading(false); // Stop loading once data is fetched
      })
      .catch(error => {
        console.error('Error fetching subjects:', error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  const handleButtonClick = (topic) => {
    navigate(`/${topic}`);
  };

  return (
    <div className="sidebar">
      {loading ? (
        <p>Loading subjects...</p> // Only show this while waiting for data
      ) : (
        subjects.map((subject, index) => (
          <button 
            key={index} 
            className="sidebar-btn" 
            onClick={() => handleButtonClick(subject.name || subject)}
          >
            {subject.name || subject}
          </button>
        ))
      )}
    </div>
  );
};

export default Sidebar;
