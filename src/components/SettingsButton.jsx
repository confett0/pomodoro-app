import SettingsIcon from "./SettingsIcon";

export default function SettingsButton({ openModal }) {
  return (
    <button
      className="settings-button"
      onClick={openModal}
      aria-label="Open settings"
    >
      <SettingsIcon />
    </button>
  );
}
