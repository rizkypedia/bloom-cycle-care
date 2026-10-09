type OvulationPeriodInputProps = {
    value: string;
    onChange: (value: string) => void;
};

function OvulationPeriodInput({ value, onChange }: OvulationPeriodInputProps) {
    return (
        <div className="ovu_period">
            <div className="ovu_period__header">
                <h3 id="cycle-length-heading">How long is your cycle?</h3>
            </div>
            <div className="ovu_period__input">
                <input
                    type="number"
                    name="period"
                    id="period"
                    min={20}
                    max={40}
                    aria-labelledby="cycle-length-heading"
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    placeholder="28"
                />
            </div>
            <p className="ovu_field_hint">Count from the first day of one period to the next.</p>
        </div>
    )
}

export default OvulationPeriodInput