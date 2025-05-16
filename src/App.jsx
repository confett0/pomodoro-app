import { useState, useRef } from "react";
import "./App.css";
import Menu from "./components/menu";
import Timer from "./components/timer";
import Settings from "./components/Settings";

function App() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [activeTab, setActiveTab] = useState("pomodoro");
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
    setIsTimerOn(false);
    setIsTimerPaused(false);
    setTimeLeft(newTimeLeft);
  };

  return (
    <>
      <h1>pomodoro</h1>
      <Menu
        setNewTimer={setNewTimer}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Timer
        timeLeft={timeLeft}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        isTimerOn={isTimerOn}
        isTimerPaused={isTimerPaused}
      />
      <Settings />
    </>
  );
}

export default App;
