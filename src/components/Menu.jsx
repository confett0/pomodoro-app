export default function Menu({
  setNewTimer,
  activeTab,
  setActiveTab,
  pomodoroSessionDuration,
  shortPauseDuration,
  longPauseDuration,
}) {
  const tabs = [
    { label: "pomodoro", duration: pomodoroSessionDuration },
    { label: "short break", duration: shortPauseDuration },
    { label: "long break", duration: longPauseDuration },
  ];
  const handleClick = (label, duration) => {
    setNewTimer(duration); // move setNewTimerLogic to start timer button
    setActiveTab(label);
  };

  return (
    <nav>
      <ul>
        {tabs.map(({ label, duration }) => (
          <li
            key={label}
            className={activeTab === label ? "active" : ""}
            onClick={() => handleClick(label, duration)}
          >
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
