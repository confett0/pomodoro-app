export default function TimerButton({ status }) {
  let buttonText;
  switch (status) {
    case "idle":
      buttonText = "Start";
      break;
    case "running":
      buttonText = "Pause";
      break;
    case "paused":
      buttonText = "Resume";
      break;
    case "completed":
      buttonText = "Restart";
      break;
  }
  return (
    <button className="timer-button" onClick={handleClick}>
      {buttonText}
    </button>
  );
}
