export default function Menu({
  setNewTimer,
  activeTab,
  setActiveTab,
  pomodoroSessionLength,
  shortPauseLength,
  longPauseLength,
}) {
  const tabs = [
    { label: "pomodoro", length: pomodoroSessionLength },
    { label: "short break", length: shortPauseLength },
    { label: "long break", length: longPauseLength },
  ];
  const handleClick = (label, length) => {
    setNewTimer(length); // move setNewTimerLogic to start timer button
    setActiveTab(label);
  };

  return (
    <nav>
      <ul>
        {tabs.map(({ label, length }) => (
          <li
            key={label}
            className={activeTab === label ? "active" : ""}
            onClick={() => handleClick(label, length)}
          >
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
