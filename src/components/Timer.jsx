import CircularProgressBar from "./CircularProgressBar";

export default function Timer({
  // valuta estrazione componenti TimerDisplay e TimerButton
  // clean clean clean
  selectedDuration,
  timeLeft,
  totalTime,
  startTimer,
  pauseTimer,
  isTimerOn,
  isTimerPaused,
}) {
  const displayTime = isTimerOn ? Math.floor(timeLeft / 60) : selectedDuration;
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
            <span>{String(displayTime).padStart(2, "0")}</span>
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
