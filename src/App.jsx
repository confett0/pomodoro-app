import { useState, useRef, useEffect } from "react";
import "./App.css";
import DEFAULT_DURATIONS from "./defaultDurations";
import Menu from "./components/Menu";
import Timer from "./components/Timer";
import Modal from "./components/Modal";
import Settings from "./components/Settings";
import SettingsButton from "./components/SettingsButton";
import logo from "/src/assets/logo.svg";

function App() {
  const [sessionDuration, setSessionDuration] = useState(DEFAULT_DURATIONS);
  const [timerState, setTimerState] = useState({
    name: "pomodoro",
    duration: sessionDuration.pomodoro,
    timeLeft: sessionDuration.pomodoro,
    status: "idle",
  });
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

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []); // clear interval when component unmounts

  const startTimer = () => {
    if (intervalRef.current) return;

    const endTime = Date.now() + timerState.timeLeft * 1000; // ms

    intervalRef.current = setInterval(() => {
      const newTimeLeft = Math.max(
        0,
        Math.round((endTime - Date.now()) / 1000),
      ); // Math.max() is used to avoid negative values

      if (newTimeLeft <= 0) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;

        setTimerState((prev) => {
          return {
            ...prev,
            timeLeft: 0,
            status: "completed",
          };
        });
        return;
      }

      setTimerState((prev) => {
        return { ...prev, status: "running", timeLeft: newTimeLeft };
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

  const setNewTimer = (sessionName) => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;

    setTimerState({
      name: sessionName,
      duration: sessionDuration[sessionName],
      timeLeft: sessionDuration[sessionName],
      status: "idle",
    });
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setNewTimer(tabName);
  };

  const changeSessionDuration = (sessionName, newDuration) => {
    setSessionDuration((prev) => {
      return { ...prev, [sessionName]: newDuration };
    });
    // reset timer only if editing the active session and timer is not running
    if (sessionName === activeTab && timerState.status !== "running") {
      setTimerState((prev) => {
        return {
          ...prev,
          duration: newDuration,
          timeLeft: newDuration,
          status: "idle",
        };
      });
    }
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
      <img src={logo} alt="Pomodoro App logo" />
      <Menu
        tabs={Object.keys(sessionDuration)}
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
          sessionDuration={sessionDuration}
          changeSessionDuration={changeSessionDuration}
          theme={theme}
          changeTheme={changeTheme}
        />
      </Modal>
    </>
  );
}

export default App;
