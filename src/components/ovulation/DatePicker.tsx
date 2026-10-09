type OvulationDatepickerProps = {
    value: string;
    onChange: (value: string) => void;
};

function OvulationDatepicker ({ value, onChange }: OvulationDatepickerProps) {
    return (
        <div className="ovu_pick_date">
            <div className="ovu_pick_date__heading">
                <h3 id="period-start-heading">When did your last period start?</h3>
            </div>
            <div className="ovu_pick_date__picker">
                <input
                    type="date"
                    name="date_or_periode"
                    aria-labelledby="period-start-heading"
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                />
            </div>
            <p className="ovu_field_hint">Choose the first day of your most recent period.</p>
        </div>
    )
}

export default OvulationDatepicker