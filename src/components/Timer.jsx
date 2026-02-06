import CircularProgressBar from "./CircularProgressBar";

export default function Timer({
  timeLeft,
  totalTime,
  startTimer,
  pauseTimer,
  isTimerOn,
  isTimerPaused,
}) {
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
        <CircularProgressBar timeLeft={timeLeft} totalTime={totalTime} />
        <div className="timer-content">
          <p className="time-left">
            <span>{String(Math.floor(timeLeft / 60)).padStart(2, "0")}</span>
            <span>:</span>
            <span>{String(timeLeft % 60).padStart(2, "0")}</span>
          </p>
          <button className="timer-button" onClick={handleClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
