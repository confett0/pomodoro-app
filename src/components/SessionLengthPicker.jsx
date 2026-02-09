export default function SessionLengthPicker({
  sessionDuration,
  changeSessionDuration,
}) {
  return (
    <div className="timer-inputs-wrap">
      <label htmlFor="pomodoro-input">
        pomodoro
        <input
          type="number"
          name="pomodoro"
          id="pomodoro-input"
          value={sessionDuration.pomodoro / 60}
          onChange={(e) => {
            changeSessionDuration("pomodoro", +e.target.value * 60);
          }}
        />
      </label>
      <label htmlFor="short-break-input">
        short break
        <input
          type="number"
          name="short-break"
          id="short-break-input"
          value={sessionDuration["short pause"] / 60}
          onChange={(e) =>
            changeSessionDuration("short pause", +e.target.value * 60)
          }
        />
      </label>
      <label htmlFor="long-break-input">
        long break
        <input
          type="number"
          name="long-break"
          id="long-break-input"
          value={sessionDuration["long pause"] / 60}
          onChange={(e) =>
            changeSessionDuration("long pause", +e.target.value * 60)
          }
        />
      </label>
    </div>
  );
}
