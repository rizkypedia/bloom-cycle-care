export type OvulationDates = {
    ovulationDate: Date;
    fertileStart: Date;
    fertileEnd: Date;
};

export function calculateOvulationDates(
    periodStartDate: string,
    cycleLength: number,
): OvulationDates | null {
    if (!periodStartDate || !Number.isFinite(cycleLength) || cycleLength <= 0) {
        return null;
    }

    const startDate = new Date(`${periodStartDate}T00:00:00`);
    if (Number.isNaN(startDate.getTime())) {
        return null;
    }

    const ovulationDate = new Date(startDate);
    ovulationDate.setDate(startDate.getDate() + cycleLength - 14);

    const fertileStart = new Date(startDate);
    fertileStart.setDate(startDate.getDate() + cycleLength - 17);

    const fertileEnd = new Date(startDate);
    fertileEnd.setDate(startDate.getDate() + cycleLength - 12);

    return {
        ovulationDate,
        fertileStart,
        fertileEnd,
    };
}
