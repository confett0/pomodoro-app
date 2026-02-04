export default function DurationPicker({
  pomodoroSessionDuration,
  shortPauseDuration,
  longPauseDuration,
  setPomodoroSessionDuration,
  setShortPauseDuration,
  setLongPauseDuration,
  setTimeLeft,
}) {
  return (
    <div className="timer-inputs-wrap">
      <label htmlFor="pomodoro-input">
        pomodoro
        <input
          type="number"
          name="pomodoro"
          id="pomodoro-input"
          value={pomodoroSessionDuration}
          onChange={(e) => {
            setPomodoroSessionDuration(e.target.value);
            setTimeLeft(e.target.value);
          }}
        />
      </label>
      <label htmlFor="short-break-input">
        short break
        <input
          type="number"
          name="short-break"
          id="short-break-input"
          value={shortPauseDuration}
          onChange={(e) => setShortPauseDuration(e.target.value)}
        />
      </label>
      <label htmlFor="long-break-input">
        long break
        <input
          type="number"
          name="long-break"
          id="long-break-input"
          value={longPauseDuration}
          onChange={(e) => setLongPauseDuration(e.target.value)}
        />
      </label>
    </div>
  );
}
