export default function Menu({ tabs, activeTab, handleTabChange }) {
  return (
    <nav>
      <ul>
        {tabs.map((label) => (
          <li
            key={label}
            className={activeTab === label ? "active" : ""}
            onClick={() => handleTabChange(label)}
          >
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
