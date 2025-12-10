import SettingsSection from "./SettingsSection";
import DurationPicker from "./DurationPicker";

export default function Settings({
  pomodoroSessionDuration,
  shortPauseDuration,
  longPauseDuration,
  setPomodoroSessionDuration,
  setShortPauseDuration,
  setLongPauseDuration,
  setTimeLeft
}) {
  return (
    <div className="settings">
      <div className="settings-heading">
        <h2>Settings</h2>
      </div>
      <SettingsSection title="Time (minutes)">
        <DurationPicker pomodoroSessionDuration={pomodoroSessionDuration} shortPauseDuration={shortPauseDuration}
          longPauseDuration={longPauseDuration} setLongPauseDuration={setLongPauseDuration} setPomodoroSessionDuration={setPomodoroSessionDuration} setShortPauseDuration={setShortPauseDuration} setTimeLeft={setTimeLeft} />
      </SettingsSection>
      <SettingsSection title="Font"></SettingsSection>
      <SettingsSection title="Color"></SettingsSection>
    </div>
  );
}
