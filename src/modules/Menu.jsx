export default function Menu({ setNewTimer, activeTab, setActiveTab }) {
  const tabs = [
    { label: "pomodoro", duration: 25 * 60 },
    { label: "short break", duration: 5 * 60 },
    { label: "long break", duration: 10 * 60 },
  ];
  const handleClick = (label, duration) => {
    setNewTimer(duration);
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
