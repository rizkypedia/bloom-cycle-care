import { useMemo, useState } from "react";
import OvulationDatepicker from "./DatePicker";
import OvulationPeriodInput from  "./PeriodInput"
import { calculateOvulationDates } from "../../lib/ovulation";

function OvulationCalculator () {
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

    return (
        <div className="ovu_calculator">
            <div className="ovu_intro">
                <p className="ovu_intro__eyebrow">YOUR CYCLE, YOUR WAY</p>
                <h2>A little more in tune with your body.</h2>
                <p className="ovu_intro__copy">
                    Get a gentle estimate of your ovulation day and fertile window.
                    Every cycle is different, so think of this as a helpful guide.
                </p>
            </div>
            <OvulationDatepicker value={startDate} onChange={setStartDate} />
            <OvulationPeriodInput value={cycleLength} onChange={setCycleLength} />
            <div className="ovu_button">
                <button type="button" name="calculate_ovulation" onClick={handleCalculate}>
                    See my fertile window
                </button>
            </div>

            <div className={`ovu_result_panel ${showResult ? "is-visible" : ""}`} aria-live="polite">
                {showResult ? (
                    <>
                        <p className="ovu_result_panel__label">Your estimated ovulation day</p>
                        <h4>{result.ovulationDate.toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        })}</h4>
                        <p className="ovu_result_panel__meta">
                            Fertile window: {result.fertileStart.toLocaleDateString(undefined, {
                                month: "short",
                                day: "numeric",
                            })} - {result.fertileEnd.toLocaleDateString(undefined, {
                                month: "short",
                                day: "numeric",
                            })}
                        </p>
                    </>
                ) : (
                    <>
                        <p className="ovu_result_panel__label">Your cycle insight</p>
                        <p className="ovu_result_panel__empty">
                            Add a couple of details above to see your estimated fertile window.
                        </p>
                    </>
                )}
            </div>
        </div>
    )
}

export default OvulationCalculator