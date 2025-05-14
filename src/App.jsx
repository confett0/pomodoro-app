import { useState, useRef } from 'react'
import './App.css'
import Menu from './modules/menu'
import Timer from './modules/timer'

function App() {

  const [timeLeft, setTimeLeft] = useState(25 * 60)
  const intervalRef = useRef(null)

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimeLeft(prevTimeLeft => {
        if (prevTimeLeft === 0) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
          return 0
        }
       return prevTimeLeft - 1
      })
    }, 1000)
  }

  const pauseTimer = () => clearInterval(intervalRef.current)

  const setNewTimer = (newTimeLeft) => {
    pauseTimer()
    setTimeLeft(newTimeLeft)
  }

  return (
    <>
      <h1>pomodoro</h1>
      <Menu setNewTimer={setNewTimer} />
      <Timer timeLeft={timeLeft} startTimer={startTimer} pauseTimer={pauseTimer} />
    </>
  )
}

export default App
