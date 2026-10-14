import { useMemo, useState } from "react";
import { languageLocaleMap, type LanguageCode, type LanguageDictionary } from "../../lang";
import { calculateOvulationDates } from "../../lib/ovulation";
import OvulationDatepicker from "./DatePicker";
import OvulationPeriodInput from "./PeriodInput";

type OvulationCalculatorProps = {
    language: LanguageCode
    translations: LanguageDictionary
}

function OvulationCalculator({ language, translations }: OvulationCalculatorProps) {
    const [startDate, setStartDate] = useState<string>("");
    const [cycleLength, setCycleLength] = useState<string>("28");
    const [hasCalculated, setHasCalculated] = useState(false);

    const result = useMemo(() => {
        return calculateOvulationDates(startDate, Number(cycleLength));
    }, [cycleLength, startDate]);

    const handleCalculate = () => {
        setHasCalculated(true);
    };

    const showResult = hasCalculated && result;
    const locale = languageLocaleMap[language];

    const formatDate = (date: Date, options: Intl.DateTimeFormatOptions) =>
        new Intl.DateTimeFormat(locale, options).format(date);

    return (
        <div className="ovu_calculator">
            <div className="ovu_intro">
                <p className="ovu_intro__eyebrow">{translations.eyebrow}</p>
                <h2>{translations.introTitle}</h2>
                <p className="ovu_intro__copy">{translations.introCopy}</p>
            </div>
            <OvulationDatepicker
                value={startDate}
                onChange={setStartDate}
                language={language}
                translations={translations}
            />
            <OvulationPeriodInput
                value={cycleLength}
                onChange={setCycleLength}
                language={language}
                translations={translations}
            />
            <div className="ovu_button">
                <button type="button" name="calculate_ovulation" onClick={handleCalculate}>
                    {translations.button}
                </button>
            </div>

            <div className={`ovu_result_panel ${showResult ? "is-visible" : ""}`} aria-live="polite">
                {showResult ? (
                    <>
                        <p className="ovu_result_panel__label">{translations.resultLabel}</p>
                        <h4>
                            {formatDate(result.ovulationDate, {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </h4>
                        <p className="ovu_result_panel__meta">
                            {translations.fertileWindowLabel}: {formatDate(result.fertileStart, {
                                month: "short",
                                day: "numeric",
                            })} - {formatDate(result.fertileEnd, {
                                month: "short",
                                day: "numeric",
                            })}
                        </p>
                    </>
                ) : (
                    <>
                        <p className="ovu_result_panel__label">{translations.cycleInsightLabel}</p>
                        <p className="ovu_result_panel__empty">{translations.emptyState}</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default OvulationCalculator