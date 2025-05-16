export default function Settings({
  pomodoroSessionDuration,
  shortPauseDuration,
  longPauseDuration,
  setPomodoroSessionDuration,
  setShortPauseDuration,
  setLongPauseDuration,
  setTimeLeft
}) {
  return (
    <div className="settings">
      <div className="settings-heading">
        <h2>Settings</h2>
      </div>
      <section>
        <h3>Time (minutes)</h3>
        <div className="timer-inputs-wrap">
          <label htmlFor="pomodoro-input">
            pomodoro
            <input
              type="number"
              name="pomodoro"
              id="pomodoro-input"
              value={pomodoroSessionDuration}
              onChange={(e) => {
                setPomodoroSessionDuration(e.target.value)
                setTimeLeft(e.target.value)
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
            />
          </label>
          <label htmlFor="long-break-input">
            long break
            <input
              type="number"
              name="long-break"
              id="long-break-input"
              value={longPauseDuration}
            />
          </label>
        </div>
      </section>
    </div>
  );
}
