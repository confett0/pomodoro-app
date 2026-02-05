export default function Menu({
  setNewTimer,
  activeTab,
  setActiveTab,
  pomodoroSessionDuration,
  shortPauseDuration,
  longPauseDuration,
}) {
  const tabs = [
    { label: "pomodoro", duration: pomodoroSessionDuration * 60 /* seconds */ },
    { label: "short break", duration: shortPauseDuration * 60 },
    { label: "long break", duration: longPauseDuration * 60 },
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
