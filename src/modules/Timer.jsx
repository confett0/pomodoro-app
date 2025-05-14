export default function Timer({ timeLeft, startTimer, pauseTimer }) {
  return (
    <div className="timer">
      <p className="time-left">
        <span>{String(Math.floor(timeLeft / 60)).padStart(2, "0")}</span>
        <span>:</span>
        <span>{String(timeLeft % 60).padStart(2, "0")}</span>
      </p>
      <button onClick={startTimer}>Start</button>
    </div>
  );
}
