import { useState } from 'react'
import Videobox from './Components/VideoBox/Videobox'
import './App.css'

function App() {
  const [count, setCount] = useState(Array.from({ length: 10 }, (_, index) => index));

  return (
    <>
      <div className="video-title">
        <hr />
        <h1>RIGI Video Player</h1>
        <hr />
      </div>
      <div className="container">
      {
        count.map((item) => {
          if (item < 10) {
            return <Videobox key={item} />; 
          } else {
            return null; 
          }
        })
      }
      </div>
    </>
  )
}

export default App
