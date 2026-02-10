import CircularProgressBar from "./CircularProgressBar";

export default function Timer({ timerState, startTimer, pauseTimer }) {
  const isTimerOn = timerState.status === "running";
  const isTimerPaused = timerState.status === "paused";
  const buttonText = !isTimerOn ? "Start" : isTimerPaused ? "Resume" : "Pause";
  const handleClick = () => {
    if (!isTimerPaused && isTimerOn) {
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
          <button className="timer-button" onClick={handleClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
