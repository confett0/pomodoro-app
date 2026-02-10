import CircularProgressBar from "./CircularProgressBar";
import TimerDisplay from "./TimerDisplay";
import TimerButton from "./TimerButton";
import chimeSound from "../assets/sounds/chime.mp3";
import { useEffect } from "react";

export default function Timer({ timerState, startTimer, pauseTimer }) {
  useEffect(() => {
    if (timerState.status === "completed") {
      const sound = new Audio(chimeSound);
      sound.play();
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
          <TimerDisplay timeLeft={timerState.timeLeft} />
          <TimerButton status={timerState.status} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
