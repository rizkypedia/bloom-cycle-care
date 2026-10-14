import type { LanguageCode, LanguageDictionary } from "../../lang";

type OvulationPeriodInputProps = {
    value: string;
    onChange: (value: string) => void;
    language: LanguageCode;
    translations: LanguageDictionary;
};

function OvulationPeriodInput({ value, onChange, translations }: OvulationPeriodInputProps) {
    return (
        <div className="ovu_period">
            <div className="ovu_period__header">
                <h3 id="cycle-length-heading">{translations.periodQuestion}</h3>
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
            <p className="ovu_field_hint">{translations.periodHint}</p>
        </div>
    )
}

export default OvulationPeriodInput