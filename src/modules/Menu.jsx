export default function Menu({ setNewTimer }) {
  const pomodoroSession = 25 * 60;
  const shortBreak = 5 * 60;
  const longBreak = 10 * 60;
  return (
    <nav>
      <ul>
        <li className="active" onClick={() => setNewTimer(pomodoroSession)}>
          pomodoro
        </li>
        <li onClick={() => setNewTimer(shortBreak)}>short break</li>
        <li onClick={() => setNewTimer(longBreak)}>long break</li>
      </ul>
    </nav>
  );
}
