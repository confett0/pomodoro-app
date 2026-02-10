import SettingsSection from "./SettingsSection";
import SessionLengthPicker from "./SessionLengthPicker";
import FontPicker from "./FontPicker";
import ColorPicker from "./ColorPicker";

export default function Settings({
  sessions,
  sessionDuration,
  changeSessionDuration,
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
            sessions={sessions}
            sessionDuration={sessionDuration}
            changeSessionDuration={changeSessionDuration}
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
