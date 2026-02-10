export default function TimerButton({ status, handleClick }) {
  const buttonLabels = {
    idle: "Start",
    running: "Pause",
    paused: "Resume",
    completed: "Restart",
  };
  return (
    <button className="timer-button" onClick={handleClick}>
      {buttonLabels[status]}
    </button>
  );
}
