import { useState } from "react";

export default function SessionLengthPicker({
  sessionDuration,
  changeSessionDuration,
}) {
  // local state to temporarily allow invalid inputs (like "") when user is typing
  const [localValues, setLocalValues] = useState(() => {
    const values = {};
    Object.keys(sessionDuration).forEach(
      (session) => (values[session] = sessionDuration[session] / 60)
    );
    return values;
  });
  const sessions = Object.keys(sessionDuration);

  const handleChange = (e, session) => {
    const inputValue = e.target.value;

    // allow empty input while typing
    if (inputValue === "") {
      setLocalValues((prev) => ({ ...prev, [session]: "" }));
      return;
    }
    // block session length above 99 minutes to avoid breaking the UI
    if (inputValue.length > 2) {
      return;
    }
    const minutes = parseInt(inputValue, 10);
    if (!isNaN(minutes) && minutes > 0) {
      setLocalValues((prev) => ({ ...prev, [session]: inputValue }));
      changeSessionDuration(session, minutes * 60);
    }
  };

  const handleBlur = (e, session) => {
    const minutes = parseInt(e.target.value, 10);

    // restore default value if necessary
    if (isNaN(minutes) || minutes < 1) {
      setLocalValues((prev) => ({
        ...prev,
        [session]: sessionDuration[session] / 60,
      }));
    }
  };

  return (
    <div className="timer-inputs-wrap">
      {sessions.map((session) => (
        <label key={session} htmlFor={`${session}-input`}>
          {session}
          <input
            type="number"
            inputMode="numeric"
            pattern="[0-9]*"
            name={session}
            id={`${session}-input`}
            min="1"
            max="99"
            step="1"
            value={localValues[session]}
            onChange={(e) => handleChange(e, session)}
            onBlur={(e) => handleBlur(e, session)}
          />
        </label>
      ))}
    </div>
  );
}
