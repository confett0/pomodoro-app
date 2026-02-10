export default function TimerDisplay({ timeLeft }) {
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <p className="timer-display">
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </p>
  );
}
