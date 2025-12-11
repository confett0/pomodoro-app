export default function ColorPicker() {
    return (
        <div className="color-picker">
            <fieldset>
                <label><input type="radio" name="color" id="coral" /></label>
                <label><input type="radio" name="color" id="turquoise" /></label>
                <label><input type="radio" name="color" id="lilac" /></label>
            </fieldset>
        </div>
    )

}