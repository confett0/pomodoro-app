import SettingsSection from "./SettingsSection";
import DurationPicker from "./DurationPicker";
import FontPicker from "./FontPicker";
import ColorPicker from "./ColorPicker";

export default function Settings({
  pomodoroSessionDuration,
  shortPauseDuration,
  longPauseDuration,
  setPomodoroSessionDuration,
  setShortPauseDuration,
  setLongPauseDuration,
  setTimeLeft,
  theme,
  changeTheme,
}) {
  return (
    <div className="settings">
      <div className="settings-heading">
        <h2>Settings</h2>
      </div>
      <div className="settings-container">
        <SettingsSection className={"duration-section"} title="Time (minutes)">
          <DurationPicker
            pomodoroSessionDuration={pomodoroSessionDuration}
            shortPauseDuration={shortPauseDuration}
            longPauseDuration={longPauseDuration}
            setLongPauseDuration={setLongPauseDuration}
            setPomodoroSessionDuration={setPomodoroSessionDuration}
            setShortPauseDuration={setShortPauseDuration}
            setTimeLeft={setTimeLeft}
          />
        </SettingsSection>
        <SettingsSection title="Font">
          <FontPicker font={theme.font} changeTheme={changeTheme} />
        </SettingsSection>
        <SettingsSection title="Color">
          <ColorPicker color={theme.color} changeTheme={changeTheme} />
        </SettingsSection>
      </div>
      <button>Apply</button>
    </div>
  );
}
