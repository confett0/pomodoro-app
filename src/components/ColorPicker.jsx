export default function ColorPicker({ accentColor, setAccentColor }) {
  const handleChange = (e) => setAccentColor(e.target.value);

  return (
    <div className="color-picker">
      <fieldset>
        <label>
          <input
            type="radio"
            name="color"
            id="coral"
            value="#F87070"
            checked={accentColor === "#F87070"}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="radio"
            name="color"
            id="turquoise"
            value="#70F3F8"
            checked={accentColor === "#70F3F8"}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="radio"
            name="color"
            id="lilac"
            value="#D881F8"
            checked={accentColor === "#D881F8"}
            onChange={handleChange}
          />
        </label>
      </fieldset>
    </div>
  );
}
