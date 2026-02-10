import CircularProgressBar from "./CircularProgressBar";
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
          <p className="time-left">
            <span>
              {String(Math.floor(timerState.timeLeft / 60)).padStart(2, "0")}
            </span>
            <span>:</span>
            <span>{String(timerState.timeLeft % 60).padStart(2, "0")}</span>
          </p>
          <TimerButton status={timerState.status} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
