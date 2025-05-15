import { useState, useRef } from "react";
import "./App.css";
import Menu from "./modules/menu";
import Timer from "./modules/timer";

function App() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    setIsTimerOn(true);
    setIsTimerPaused(false);
    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === 0) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          setIsTimerOn(false);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    setIsTimerPaused(true);
    clearInterval(intervalRef.current);
  };

  const setNewTimer = (newTimeLeft) => {
    clearInterval(intervalRef.current);
    setIsTimerOn(false)
    setIsTimerPaused(false)
    setTimeLeft(newTimeLeft);
  };

  return (
    <>
      <h1>pomodoro</h1>
      <Menu setNewTimer={setNewTimer} />
      <Timer
        timeLeft={timeLeft}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        isTimerOn={isTimerOn}
        isTimerPaused={isTimerPaused}
      />
    </>
  );
}

export default App;
