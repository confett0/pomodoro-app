export default function Menu({ timerSessions, activeTab, handleTabChange }) {
  return (
    <nav>
      <ul>
        {timerSessions.map((session, id) => (
          <li
            key={id}
            id={id}
            className={activeTab === id ? "active" : ""}
            onClick={() => handleTabChange(id)}
          >
            {session.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
