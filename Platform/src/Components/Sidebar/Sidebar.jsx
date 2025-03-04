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
      <button className="sidebar-btn" onClick={() => handleButtonClick('javascript')}>JavaScript</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('php')}>PHP</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('ruby')}>Ruby</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('swift')}>Swift</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('go')}>Go</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('r')}>R</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('kotlin')}>Kotlin</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('scala')}>Scala</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('perl')}>Perl</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('haskell')}>Haskell</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('lua')}>Lua</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('typescript')}>TypeScript</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('assembly-language')}>Assembly Language</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('csharp')}>C#</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('dart')}>Dart</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('Shell Scripting')}>Shell Scripting</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('rust')}>Rust</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('julia')}>Julia</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('matlab')}>Matlab</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('vbscript')}>VBScript</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('Scratch')}>Scratch</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('Erlang')}>Erlang</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('COBOL')}>COBOL</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('ada')}>Ada</button>
      <button className="sidebar-btn" onClick={() => handleButtonClick('prolog')}>Prolog</button>
    </div>
  );
};

export default Sidebar;
