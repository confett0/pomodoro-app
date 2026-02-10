export default function SessionLengthPicker({
  sessionDuration,
  changeSessionDuration,
  sessions,
}) {
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
            onChange={(e) =>
              changeSessionDuration(session, +e.target.value * 60)
            }
          />
        </label>
      ))}
    </div>
  );
}
