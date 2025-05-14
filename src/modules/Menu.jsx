export default function Menu({ startTimer }) {
  return (
    <nav>
      <ul>
        <li className="active" onClick={startTimer}>pomodoro</li>
        <li>short break</li>
        <li>long break</li>
      </ul>
    </nav>
  );
}
