export default function Menu({ tabs, activeTab, handleTabChange }) {
  return (
    <nav>
      <ul>
        {tabs.map((label) => (
          <li role="presentation" key={label}>
            <button
              role="tab"
              aria-selected={activeTab === label}
              //tabIndex={activeTab === label ? 0 : -1}
              className={activeTab === label ? "menu-tab active" : "menu-tab"}
              onClick={() => handleTabChange(label)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
