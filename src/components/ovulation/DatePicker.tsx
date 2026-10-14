import type { LanguageCode, LanguageDictionary } from "../../lang";

type OvulationDatepickerProps = {
    value: string;
    onChange: (value: string) => void;
    language: LanguageCode;
    translations: LanguageDictionary;
};

function OvulationDatepicker({ value, onChange, translations }: OvulationDatepickerProps) {
    return (
        <div className="ovu_pick_date">
            <div className="ovu_pick_date__heading">
                <h3 id="period-start-heading">{translations.dateQuestion}</h3>
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
            <p className="ovu_field_hint">{translations.dateHint}</p>
        </div>
    )
}

export default OvulationDatepicker