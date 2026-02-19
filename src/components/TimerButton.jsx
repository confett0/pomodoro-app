export default function TimerButton({ status, handleClick }) {
  const buttonLabels = {
    idle: "Start",
    running: "Pause",
    paused: "Resume",
    completed: "Completed!",
  };
  return (
    <button
      className="timer-button"
      onClick={handleClick}
      disabled={status === "completed"}
    >
      {buttonLabels[status]}
    </button>
  );
}
