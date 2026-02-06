export default function Menu({ tabs, setNewTimer, activeTab, setActiveTab }) {
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
