// src/Components/DataPage/DataPage.jsx
import React from 'react';
import './DataPage.css';

const DataPage = ({ topic }) => {
  const getArticleText = (topic) => {
    switch (topic) {
      case 'AI':
        return "Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning, reasoning, and self-correction.";
      case 'DBMS':
        return "A Database Management System (DBMS) is software that allows you to define, create, maintain, and control access to a database.";
      case 'Cyber Security':
        return "Cybersecurity involves protecting computer systems from theft, damage, or disruption of their services. It includes network security, application security, and more.";
      case 'Machine Learning':
        return "Machine Learning (ML) is a subset of AI that provides systems the ability to automatically learn from data and improve their performance over time.";
      case 'Robotics':
        return "Robotics is an interdisciplinary field that integrates computer science and engineering to design and build robots, which are programmable machines that perform tasks autonomously.";
      case 'JAVA':
        return "Java is a widely-used, object-oriented programming language known for its portability, maintainability, and large community support.";
      case 'Python':
        return "Python is a high-level programming language with easy-to-read syntax and versatility for web development, data science, artificial intelligence, and more.";
      case 'C++':
        return "C++ is a general-purpose programming language that is widely used for software development, system software, and game development.";
      case 'C':
        return "C is a procedural programming language that was developed in the 1970s. It's known for its efficiency and low-level memory manipulation capabilities.";
      case 'Javascript':
        return "JavaScript is a lightweight, interpreted programming language commonly used for web development to create interactive effects within web browsers.";
      default:
        return "Select a topic to learn more.";
    }
  };

  const articleText = getArticleText(topic);

  const videoLinks = [
    { label: `Learn more about ${topic}`, url: "https://www.youtube.com" },
    { label: `Watch this video about ${topic}`, url: "https://www.youtube.com" },
  ];

  return (
    <div className="data-page">
      <h1>{topic}</h1>
      <div className="article-container">
        <h2>About {topic}</h2>
        <p>{articleText}</p>
      </div>
      <div className="video-links">
        {videoLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </div>
      <footer>
        <p>Powered by the Learning Platform</p>
      </footer>
    </div>
  );
};

export default DataPage;
