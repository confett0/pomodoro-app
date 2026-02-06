export default function SessionLengthPicker({
  pomodoroSessionLength,
  shortPauseLength,
  longPauseLength,
  setPomodoroSessionLength,
  setShortPauseLength,
  setLongPauseLength,
}) {
  return (
    <div className="timer-inputs-wrap">
      <label htmlFor="pomodoro-input">
        pomodoro
        <input
          type="number"
          name="pomodoro"
          id="pomodoro-input"
          value={pomodoroSessionLength / 60}
          onChange={(e) => {
            setPomodoroSessionLength(e.target.value * 60);
          }}
        />
      </label>
      <label htmlFor="short-break-input">
        short break
        <input
          type="number"
          name="short-break"
          id="short-break-input"
          value={shortPauseLength / 60}
          onChange={(e) => setShortPauseLength(e.target.value * 60)}
        />
      </label>
      <label htmlFor="long-break-input">
        long break
        <input
          type="number"
          name="long-break"
          id="long-break-input"
          value={longPauseLength / 60}
          onChange={(e) => setLongPauseLength(e.target.value * 60)}
        />
      </label>
    </div>
  );
}
