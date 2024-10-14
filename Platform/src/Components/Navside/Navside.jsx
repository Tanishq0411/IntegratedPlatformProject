import React from 'react'
import './Navside.css'

const Navside = () => {
  return (
    <div>
      
        <nav>
         
          <div className="search">
            <input className='inputsearch'
            type="text"
            placeholder='Search'
             />
             <button className="searchbtn"></button>
            </div>
          {/* <button className='btn'>Button2</button> */}
          <button className='login'>Login/ SignUp</button>
        </nav>

        <div className="Sidebar">
        <button className='btn' id='btn1'>LOGO</button>
          Content
        </div>
    </div>
  )
}

export default Navside
