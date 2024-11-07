export function getDayOfWeek(date: string): string {
    const dateObj = new Date(date);

    const dayOfWeek = dateObj.toLocaleDateString("en-US", { weekday: "long", timeZone: "UTC" });
    const dayOfWeekFormated = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1,);

    return dayOfWeekFormated;
}

export function getDayShort(date: string): string {
    const dayOfWeek = getDayOfWeek(date);
    const dayOfWeekFormated = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1, 3);

    return dayOfWeekFormated;
}

export function getHourFromDate(date: string): string {
    const dateObject = new Date(date);
    const hours = String(dateObject.getHours()).padStart(2, '0');
    return hours;
}