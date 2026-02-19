import CircularProgressBar from "./CircularProgressBar";
import TimerDisplay from "./TimerDisplay";
import TimerButton from "./TimerButton";
import chimeSound from "../assets/sounds/chime.mp3";
import { useEffect, useRef } from "react";

export default function Timer({ timerState, startTimer, pauseTimer }) {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(chimeSound);
    return () => {
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (timerState.status === "completed") {
      audioRef.current
        ?.play()
        .catch((err) => console.warn("Audio playback failed:", err));
    }
  }, [timerState.status]);

  const handleClick = () => {
    if (timerState.status === "running") {
      pauseTimer();
    } else {
      startTimer();
    }
  };

  return (
    <div className="timer-wrapper">
      <div className="timer">
        <CircularProgressBar timerState={timerState} />
        <div className="timer-content">
          <TimerDisplay timerState={timerState} />
          <TimerButton status={timerState.status} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
