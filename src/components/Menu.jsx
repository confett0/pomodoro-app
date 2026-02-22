import { useRef } from "react";

export default function Menu({ tabs, activeTab, handleTabChange }) {
  const buttonRefs = useRef({});
  const handleKeyDown = (e, currentIndex) => {
    let nextIndex;

    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        nextIndex = (currentIndex + 1) % tabs.length;
        break;
      case "ArrowLeft":
        e.preventDefault();
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        break;
      case "Home":
        e.preventDefault();
        nextIndex = 0;
        break;
      case "End":
        e.preventDefault();
        nextIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    handleTabChange(tabs[nextIndex]);
    buttonRefs.current[tabs[nextIndex]]?.focus(); // move focus
  };

  return (
    <nav aria-label="Session type selection">
      <ul role="tablist">
        {tabs.map((label, index) => (
          <li role="presentation" key={label}>
            <button
              role="tab"
              ref={(el) => (buttonRefs.current[label] = el)}
              aria-selected={activeTab === label}
              className={activeTab === label ? "menu-tab active" : "menu-tab"}
              tabIndex={activeTab === label ? 0 : -1}
              onClick={() => handleTabChange(label)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
