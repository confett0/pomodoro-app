export default function ColorPicker({ color, changeTheme }) {
  return (
    <div className="color-picker">
      <fieldset>
        <label>
          <input
            type="radio"
            name="color"
            id="coral"
            value="#F87070"
            checked={color === "#F87070"}
            onChange={changeTheme}
          />
        </label>
        <label>
          <input
            type="radio"
            name="color"
            id="turquoise"
            value="#70F3F8"
            checked={color === "#70F3F8"}
            onChange={changeTheme}
          />
        </label>
        <label>
          <input
            type="radio"
            name="color"
            id="lilac"
            value="#D881F8"
            checked={color === "#D881F8"}
            onChange={changeTheme}
          />
        </label>
      </fieldset>
    </div>
  );
}
