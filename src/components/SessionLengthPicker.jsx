import { useState } from "react";

export default function SessionLengthPicker({
  sessionDuration,
  changeSessionDuration,
}) {
  const [localValues, setLocalValues] = useState(() => {
    const values = {};
    Object.keys(sessionDuration).forEach(
      (session) => (values[session] = sessionDuration[session] / 60),
    );
    return values;
  });
  const sessions = Object.keys(sessionDuration);

  const handleChange = (e, session) => {
    const inputValue = e.target.value;
    setLocalValues((prev) => ({ ...prev, [session]: inputValue }));

    if (inputValue === "") {
      return;
    }
    const minutes = parseInt(inputValue, 10);
    if (!isNaN(minutes) && minutes > 0) {
      changeSessionDuration(session, minutes * 60);
    }
  };

  const handleBlur = (e, session) => {
    const inputValue = e.target.value;
    const minutes = parseInt(inputValue, 10);

    // restore original value if necessary
    if (inputValue === "" || isNaN(minutes) || minutes < 1) {
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
            name={session}
            id={`${session}-input`}
            min="1"
            max="120"
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
