import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navside from './Components/Navside/Navside'
import Cards from './Components/Cards/Cards'
import Admin from './Pages/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="page">
       
   <Admin/>
      
      
      </div>
    </>
  )
}

export default App
