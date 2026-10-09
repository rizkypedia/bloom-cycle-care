import { calculateOvulationDates } from "../src/lib/ovulation";

function toDateKey(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

describe("calculateOvulationDates", () => {
    it("calculates an estimated ovulation day and fertile window", () => {
        const dates = calculateOvulationDates("2026-09-01", 28);

        expect(dates).not.toBeNull();
        expect(toDateKey(dates!.ovulationDate)).toBe("2026-09-15");
        expect(toDateKey(dates!.fertileStart)).toBe("2026-09-12");
        expect(toDateKey(dates!.fertileEnd)).toBe("2026-09-17");
    });

    it("handles dates that cross into the next month", () => {
        const dates = calculateOvulationDates("2026-01-25", 28);

        expect(dates).not.toBeNull();
        expect(toDateKey(dates!.ovulationDate)).toBe("2026-02-08");
        expect(toDateKey(dates!.fertileStart)).toBe("2026-02-05");
        expect(toDateKey(dates!.fertileEnd)).toBe("2026-02-10");
    });

    it.each([
        ["an empty period start date", "", 28],
        ["an invalid period start date", "not-a-date", 28],
        ["a zero cycle length", "2026-09-01", 0],
        ["a negative cycle length", "2026-09-01", -1],
        ["a non-finite cycle length", "2026-09-01", Number.NaN],
    ])("returns null for %s", (_description, periodStartDate, cycleLength) => {
        expect(calculateOvulationDates(periodStartDate, cycleLength)).toBeNull();
    });
});
