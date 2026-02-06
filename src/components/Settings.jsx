import SettingsSection from "./SettingsSection";
import SessionLengthPicker from "./SessionLengthPicker";
import FontPicker from "./FontPicker";
import ColorPicker from "./ColorPicker";

export default function Settings({
  pomodoroSessionLength,
  shortPauseLength,
  longPauseLength,
  setPomodoroSessionLength,
  setShortPauseLength,
  setLongPauseLength,
  theme,
  changeTheme,
}) {
  return (
    <div className="settings">
      <div className="settings-heading">
        <h2>Settings</h2>
      </div>
      <div className="settings-container">
        <SettingsSection className={"length-section"} title="Time (minutes)">
          <SessionLengthPicker
            pomodoroSessionLength={pomodoroSessionLength}
            shortPauseLength={shortPauseLength}
            longPauseLength={longPauseLength}
            setLongPauseLength={setLongPauseLength}
            setPomodoroSessionLength={setPomodoroSessionLength}
            setShortPauseLength={setShortPauseLength}
          />
        </SettingsSection>
        <SettingsSection title="Font">
          <FontPicker font={theme.font} changeTheme={changeTheme} />
        </SettingsSection>
        <SettingsSection title="Color">
          <ColorPicker color={theme.color} changeTheme={changeTheme} />
        </SettingsSection>
      </div>
    </div>
  );
}
