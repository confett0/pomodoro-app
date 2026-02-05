import { useState, useRef, useEffect } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Timer from "./components/Timer";
import Modal from "./components/Modal";
import Settings from "./components/Settings";
import SettingsButton from "./components/SettingsButton";

function App() {
  const [pomodoroSessionDuration, setPomodoroSessionDuration] = useState(25);
  const [shortPauseDuration, setShortPauseDuration] = useState(5);
  const [longPauseDuration, setLongPauseDuration] = useState(15);
  const [timeLeft, setTimeLeft] = useState(pomodoroSessionDuration * 60);
  const [totalTime, setTotalTime] = useState(25);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [activeTab, setActiveTab] = useState("pomodoro");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState({
    color: "var(--coral-color)",
    font: "var(--font-sans)",
  });
  const intervalRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.setProperty("--font", theme.font);
    document.documentElement.style.setProperty("--accent-color", theme.color);
  }, [theme]);

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
    setTotalTime(newTimeLeft);
  };

  const changeTheme = (e) => {
    const { name, value } = e.target;
    setTheme((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <img src="src/assets/logo.svg" alt="Pomodoro App logo" />
      <Menu
        setNewTimer={setNewTimer}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        pomodoroSessionDuration={pomodoroSessionDuration}
        shortPauseDuration={shortPauseDuration}
        longPauseDuration={longPauseDuration}
      />
      <Timer
        timeLeft={timeLeft}
        totalTime={totalTime}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
        isTimerOn={isTimerOn}
        isTimerPaused={isTimerPaused}
      />
      <SettingsButton openModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Settings
          pomodoroSessionDuration={pomodoroSessionDuration}
          shortPauseDuration={shortPauseDuration}
          longPauseDuration={longPauseDuration}
          setPomodoroSessionDuration={setPomodoroSessionDuration}
          setShortPauseDuration={setShortPauseDuration}
          setLongPauseDuration={setLongPauseDuration}
          setTimeLeft={setTimeLeft}
          theme={theme}
          changeTheme={changeTheme}
        />
      </Modal>
    </>
  );
}

export default App;
