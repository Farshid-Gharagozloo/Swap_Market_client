import "./RadioButton.scss"

export default function RadioButton({ name, options, selectedValue, onChange }) {
    return (
        <div className="radio-button">
            {options.map((option) => (
                <label key={option.value}>
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={onChange}
                    />
                    {option.label}
                </label>
            ))}
        </div>
    );
}
