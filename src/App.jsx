import { useState, useRef } from "react";
import "./App.css";
import Menu from "./components/menu";
import Timer from "./components/timer";
import Settings from "./components/Settings";

function App() {
  const [pomodoroSessionDuration, setPomodoroSessionDuration] = useState(25);
  const [shortPauseDuration, setShortPauseDuration] = useState(5);
  const [longPauseDuration, setLongPauseDuration] = useState(15);
  const [timeLeft, setTimeLeft] = useState(pomodoroSessionDuration * 60);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [activeTab, setActiveTab] = useState("pomodoro");
  const [accentColor, setAccentColor] = useState("#F87070");
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
        pomodoroSessionDuration={pomodoroSessionDuration}
        shortPauseDuration={shortPauseDuration}
        longPauseDuration={longPauseDuration}
        accentColor={accentColor}
      />
      <Timer
        timeLeft={timeLeft}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        isTimerOn={isTimerOn}
        isTimerPaused={isTimerPaused}
      />
      <Settings
        pomodoroSessionDuration={pomodoroSessionDuration}
        shortPauseDuration={shortPauseDuration}
        longPauseDuration={longPauseDuration}
        setPomodoroSessionDuration={setPomodoroSessionDuration}
        setShortPauseDuration={setShortPauseDuration}
        setLongPauseDuration={setLongPauseDuration}
        setTimeLeft={setTimeLeft}
        accentColor={accentColor}
        setAccentColor={setAccentColor}
      />
    </>
  );
}

export default App;
