export default function ColorPicker({ color, changeTheme }) {
  return (
    <div className="color-picker">
      <fieldset>
        <label>
          <input
            type="radio"
            className="radio-button color-input"
            name="color"
            id="coral"
            value="var(--coral-color)"
            checked={color === "var(--coral-color)"}
            onChange={changeTheme}
          />
        </label>
        <label>
          <input
            type="radio"
            className="radio-button color-input"
            name="color"
            id="turquoise"
            value="var(--turquoise-color)"
            checked={color === "var(--turquoise-color)"}
            onChange={changeTheme}
          />
        </label>
        <label>
          <input
            type="radio"
            className="radio-button color-input"
            name="color"
            id="lilac"
            value="var(--lilac-color)"
            checked={color === "var(--lilac-color)"}
            onChange={changeTheme}
          />
        </label>
      </fieldset>
    </div>
  );
}
