export default function TimerDisplay({ timerState }) {
  const { timeLeft, status } = timerState;
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <p className={`timer-display ${status === "completed" ? "completed" : ""}`}>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </p>
  );
}
