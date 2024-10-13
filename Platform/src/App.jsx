import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="page">
        <nav>
          <button className='btn' id='btn1'>LOGO</button>
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
          Content
        </div>

        <div className="content">

          <div className="cardcontainer">
            <div className="card">CARD1</div>
            <div className="card">CARD2</div>
            <div className="card">CARD3</div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
