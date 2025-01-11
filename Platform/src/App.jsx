import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navside from './Components/Navside/Navside'
import Cards from './Components/Cards/Cards'
import Admin from './Pages/Admin'
import LoginSignup from './Pages/LoginSignup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="page">
       
   {/* <Admin/> */}
   <LoginSignup/>
      
      
      </div>
    </>
  )
}

export default App
