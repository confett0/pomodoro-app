export default function Timer({
  timeLeft,
  startTimer,
  pauseTimer,
  isTimerOn,
  isTimerPaused,
}) {
    const buttonText = !isTimerOn ? "Start" : isTimerPaused ? "Resume" : "Pause"
    const handleClick = () => {
        if (!isTimerOn ) {
            startTimer()
        } else {
            if (!isTimerPaused) {
                pauseTimer()
            }
        }

    }

  return (
    <div className="timer">
      <p className="time-left">
        <span>{String(Math.floor(timeLeft / 60)).padStart(2, "0")}</span>
        <span>:</span>
        <span>{String(timeLeft % 60).padStart(2, "0")}</span>
      </p>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}
