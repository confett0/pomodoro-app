export default function Settings() {
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
              <input type="number" name="pomodoro" id="pomodoro-input" value="25" />
            </label>
            <label htmlFor="short-break-input">
              short break
              <input type="number" name="short-break" id="short-break-input" />
            </label>
            <label htmlFor="long-break-input">
              long break
              <input type="number" name="long-break" id="long-break-input" />
            </label>
        </div>
      </section>
    </div>
  );
}
