import CircularProgressBar from "./CircularProgressBar";
import TimerDisplay from "./TimerDisplay";
import TimerButton from "./TimerButton";

export default function Timer({ timerState, startTimer, pauseTimer }) {
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
