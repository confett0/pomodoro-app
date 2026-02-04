export default function FontPicker({ font, changeTheme }) {
  return (
    <div className="font-picker">
      <fieldset>
        <label>
          <input
            type="radio"
            name="font"
            id="kumbh-sans"
            value="Kumbh Sans, sans-serif"
            checked={font === "Kumbh Sans, sans-serif"}
            onChange={changeTheme}
          />
        </label>
        <label>
          <input
            type="radio"
            name="font"
            id="roboto-slab"
            value="Roboto Slab, serif"
            checked={font === "Roboto Slab, serif"}
            onChange={changeTheme}
          />
        </label>
        <label>
          <input
            type="radio"
            name="font"
            id="space-mono"
            value="Space Mono, monospace"
            checked={font === "Space Mono, monospace"}
            onChange={changeTheme}
          />
        </label>
      </fieldset>
    </div>
  );
}
