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
          <button>Button1</button>
          <button>Button2</button>
          <button>Button3</button>
          <button>Button4</button>
        </nav>

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
