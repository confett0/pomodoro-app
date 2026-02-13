export default function SessionLengthPicker({
  sessionDuration,
  changeSessionDuration,
  sessions,
}) {
  const handleChange = (e, session) => {
    const val = +e.target.value * 60;
    if (!isNaN(val) || val > 0) {
      changeSessionDuration(session, val);
    }
  };

  return (
    <div className="timer-inputs-wrap">
      {sessions.map((session) => (
        <label key={session} htmlFor={`${session}-input`}>
          {session}
          <input
            type="number"
            name={session}
            id={`${session}-input`}
            value={sessionDuration[session] / 60}
            onChange={(e) => handleChange(e, session)}
          />
        </label>
      ))}
    </div>
  );
}
