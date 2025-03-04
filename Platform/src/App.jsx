// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// // import Navside from './Components/Navside/Navside'
// // import Cards from './Components/Cards/Cards'
// // import Admin from './Pages/Admin'
// // import LoginSignup from './Pages/LoginSignup'
// // import Navbar from './Components/Navbar/Navbar'
// // import Sidebar from './Components/Sidebar/Sidebar'
// // import DataPage from './Components/DataPage/DataPage'

// // // function App() {
// // //   // const [count, setCount] = useState(0)

// // //   // return (
// // //   //   <>
// // //   //     <div className="page">
       
// // //   //  <Admin/>
// // //   //  {/* <LoginSignup/> */}
      
      
// // //   //     </div>
// // //   //   </>
// // //   // )
  
// // // }

// // const App = () => {
// //   const articleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat, lorem ut feugiat aliquet, erat odio sollicitudin nisl, sit amet aliquam lectus risus ac odio.";
  
// //   const videoLinks = [
// //     { label: "Learn AI Basics", url: "https://youtube.com" },
// //     { label: "Deep Dive into AI", url: "https://youtube.com" }
// //   ];

// //   return (
// //     <div className="app">
// //       <Navbar />
// //       <Sidebar />
// //       <DataPage 
// //         topic="AI"
// //         article={articleText}
// //         videoLinks={videoLinks}
// //       />
// //     </div>
// //   );
// // };


// // export default App

// import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from './Components/Navbar/Navbar';
// import Sidebar from './Components/Sidebar/Sidebar';
// import DataPage from './Components/DataPage/DataPage';
// import './App.css';
// import { Route, Routes } from 'react-router-dom';


// function App() {
//   return (
    
//       <div className="app-container">
//         <Navbar />
//         <div className="content">
//           <Sidebar />
//           <div className="data-container">
//             <Routes>
//               <Route path="/" element={<h2>Welcome to the Learning Platform!</h2>} />
//               <Route path="/ai" element={<DataPage topic="AI" />} />
//               <Route path="/dbms" element={<DataPage topic="DBMS" />} />
//               <Route path="/cyber-security" element={<DataPage topic="Cyber Security" />} />
//               <Route path="/machine-learning" element={<DataPage topic="Machine Learning" />} />
//               <Route path="/robotics" element={<DataPage topic="Robotics" />} />
//               <Route path="/java" element={<DataPage topic="JAVA" />} />
//               <Route path="/python" element={<DataPage topic="Python" />} />
//               <Route path="/cpp" element={<DataPage topic="C++" />} />
//               <Route path="/c" element={<DataPage topic="C" />} />
//               <Route path="/javascript" element={<DataPage topic="Javascript" />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
    
//   );
// }

// export default App;

// src/App.jsx
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import DataPage from './Components/DataPage/DataPage';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="data-container">
          <Routes>
            <Route path="/" element={<h2>Welcome to the Learning Platform!</h2>} />
            <Route path="/ai" element={<DataPage topic="AI" />} />
            <Route path="/dbms" element={<DataPage topic="DBMS" />} />
            <Route path="/cyber-security" element={<DataPage topic="Cyber Security" />} />
            <Route path="/machine-learning" element={<DataPage topic="Machine Learning" />} />
            <Route path="/robotics" element={<DataPage topic="Robotics" />} />
            <Route path="/java" element={<DataPage topic="JAVA" />} />
            <Route path="/python" element={<DataPage topic="Python" />} />
            <Route path="/cpp" element={<DataPage topic="C++" />} />
            <Route path="/c" element={<DataPage topic="C" />} />
            <Route path="/javascript" element={<DataPage topic="Javascript" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;



