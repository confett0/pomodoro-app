export default function FontPicker({ font, changeTheme }) {
  return (
    <div className="font-picker">
      <fieldset>
        <label>
          <input
            type="radio"
            className="radio-button font-input"
            name="font"
            id="kumbh-sans"
            value="var(--font-sans)"
            checked={font === "var(--font-sans)"}
            onChange={changeTheme}
          />
        </label>
        <label>
          <input
            type="radio"
            className="radio-button font-input"
            name="font"
            id="roboto-slab"
            value="var(--font-serif)"
            checked={font === "var(--font-serif)"}
            onChange={changeTheme}
          />
        </label>
        <label>
          <input
            type="radio"
            className="radio-button font-input"
            name="font"
            id="space-mono"
            value="var(--font-mono)"
            checked={font === "var(--font-mono)"}
            onChange={changeTheme}
          />
        </label>
      </fieldset>
    </div>
  );
}
