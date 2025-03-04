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

import AdminPage from './Pages/AdminPage/AdminPage';

function App() {
  const topicsList = [
    'Python', 'Java', 'C', 'C++', 'JavaScript', 'PHP', 'Ruby', 'Swift', 'Go', 'R',
    'Kotlin', 'Scala', 'Perl', 'Haskell', 'Lua', 'TypeScript', 'SQL', 'Assembly Language',
    'C#', 'Dart', 'Shell Scripting', 'Rust', 'Julia', 'Matlab', 'VBScript', 'Scratch',
    'Erlang', 'COBOL', 'Ada', 'Prolog', 'Machine Learning'
  ];
  return (

      <div className="app-container">
        
       <Navbar topicsList={topicsList}/>
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
             <Route path="/php" element={<DataPage topic="Php" />} />
             <Route path="/ruby" element={<DataPage topic="Ruby" />} />
             <Route path="/swift" element={<DataPage topic="Swift" />} />
             <Route path="/go" element={<DataPage topic="Go" />} />
             <Route path="/r" element={<DataPage topic="R" />} />
             <Route path="/kotlin" element={<DataPage topic="Kotlin" />} />
             <Route path="/scala" element={<DataPage topic="Scala" />} />
             <Route path="/perl" element={<DataPage topic="Perl" />} />
             <Route path="/haskell" element={<DataPage topic="Haskell" />} />
             <Route path="/lua" element={<DataPage topic="Lua" />} />
             <Route path="/typescript" element={<DataPage topic="Typescript" />} />
             <Route path="/assembly language" element={<DataPage topic="Assembly Language" />} />
             <Route path="/c#" element={<DataPage topic="C#" />} />
             <Route path="/dart" element={<DataPage topic="Dart" />} />
             <Route path="/shell scripting" element={<DataPage topic="Shell Scripting" />} />
             <Route path="/rust" element={<DataPage topic="Rust" />} />
             <Route path="/julia" element={<DataPage topic="Julia" />} />
             <Route path="/matlab" element={<DataPage topic="Matlab" />} />
             <Route path="/VBScript" element={<DataPage topic="VBScript" />} />
             <Route path="/erlang" element={<DataPage topic="Erlang" />} />
             <Route path="/cobol" element={<DataPage topic="COBOL" />} />
             <Route path="/ada" element={<DataPage topic="Ada" />} />
             <Route path="/prolog" element={<DataPage topic="Prolog" />} />
             <Route path="/scratch" element={<DataPage topic="Scratch" />} />
           </Routes>
         </div>
       </div> 
     {/* <AdminPage/> */}
    
     </div> 
  );
}

export default App;



