import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/Sidebar';
import AI from '../Components/ComputerScience/AI';
import DCCN from '../Components/ComputerScience/DCCN';
import DBMS from '../Components/ComputerScience/DBMS';
import OS from '../Components/ComputerScience/OS';
// import Navside from '../Components/Navside/Navside';
import Navbar from '../Components/Navbar/Navbar';
import DataPage from '../Components/DataPage/DataPage';
const Admin = () => {
  return (
    <div>
      {/* <Navside /> */}
      <Sidebar />
      <Navbar />
      <DataPage />
      <Routes>
        <Route path='/Ai' element={<AI />} />
        <Route path='/dbms' element={<DBMS />} />
        <Route path='/dccn' element={<DCCN />} />
        <Route path='/os' element={<OS />} />
      </Routes>
    </div>
  );
};

export default Admin;