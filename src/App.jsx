import { useState, useRef, useEffect } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Timer from "./components/Timer";
import Modal from "./components/Modal";
import Settings from "./components/Settings";
import SettingsButton from "./components/SettingsButton";

function App() {
  const [timerState, setTimerState] = useState({
    status: "idle",
    session: "pomodoro",
    timeLeft: 25 * 60,
    totalTime: 25 * 60,
  });

  const [pomodoroSessionLength, setPomodoroSessionLength] = useState(
    25 * 60 /* seconds */,
  );
  const [shortPauseLength, setShortPauseLength] = useState(5 * 60);
  const [longPauseLength, setLongPauseLength] = useState(15 * 60);
  const [timeLeft, setTimeLeft] = useState(pomodoroSessionLength);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [activeTab, setActiveTab] = useState("pomodoro");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState({
    color: "var(--coral-color)",
    font: "var(--font-sans)",
  });
  const timerLengths = {
    pomodoro: pomodoroSessionLength,
    "short break": shortPauseLength,
    "long break": longPauseLength,
  };
  const intervalRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.setProperty("--font", theme.font);
    document.documentElement.style.setProperty("--accent-color", theme.color);
  }, [theme]);

  const startTimer = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTimerState((prev) => {
        if (prev.timeLeft <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return {
            ...prev,
            timeLeft: 0,
            status: "completed",
          };
        }
        return { ...prev, status: "running", timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);
  };

  const pauseTimer = () => {
    setTimerState((prev) => {
      return { ...prev, status: "paused" };
    });
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const setNewTimer = (newTimeLeft) => {
    clearInterval(intervalRef.current);
    setIsTimerOn(false);
    setIsTimerPaused(false);
    setTimeLeft(newTimeLeft);
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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <img src="src/assets/logo.svg" alt="Pomodoro App logo" />
      <Menu
        tabs={Object.keys(timerLengths)}
        activeTab={activeTab}
        handleTabChange={handleTabChange}
      />
      <Timer
        timerState={timerState}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
      />
      <SettingsButton openModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Settings
          pomodoroSessionLength={pomodoroSessionLength}
          shortPauseLength={shortPauseLength}
          longPauseLength={longPauseLength}
          setPomodoroSessionLength={setPomodoroSessionLength}
          setShortPauseLength={setShortPauseLength}
          setLongPauseLength={setLongPauseLength}
          theme={theme}
          changeTheme={changeTheme}
        />
      </Modal>
    </>
  );
}

export default App;
