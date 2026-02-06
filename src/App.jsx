import { useState, useRef, useEffect } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Timer from "./components/Timer";
import Modal from "./components/Modal";
import Settings from "./components/Settings";
import SettingsButton from "./components/SettingsButton";

function App() {
  const [pomodoroSessionLength, setPomodoroSessionLength] = useState(
    25 * 60 /* seconds */,
  );
  const [shortPauseLength, setShortPauseLength] = useState(5 * 60);
  const [longPauseLength, setLongPauseLength] = useState(15 * 60);
  const [timeLeft, setTimeLeft] = useState(pomodoroSessionLength);
  const [totalTime, setTotalTime] = useState(pomodoroSessionLength);
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [activeTab, setActiveTab] = useState("pomodoro");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState({
    color: "var(--coral-color)",
    font: "var(--font-sans)",
  });
  const menuTabs = [
    { label: "pomodoro", length: pomodoroSessionLength },
    { label: "short break", length: shortPauseLength },
    { label: "long break", length: longPauseLength },
  ];
  const intervalRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.setProperty("--font", theme.font);
    document.documentElement.style.setProperty("--accent-color", theme.color);
  }, [theme]);

  const startTimer = () => {
    if (intervalRef.current) return;

    setIsTimerOn(true);
    setIsTimerPaused(false);
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          setIsTimerOn(false);
          // add restart logic
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    setIsTimerPaused(true);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
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
        tabs={menuTabs}
        setNewTimer={setNewTimer}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
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
