function solution(a, b) {
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const baseDay = new Date(2016, 0, 1).getDay();

    const totalDays = (new Date(2016, a - 1, b).getTime() - new Date(2016, 0, 1).getTime()) / (1000 * 60 * 60 * 24);

    const resultDay = (baseDay + totalDays) % 7;

    return daysOfWeek[resultDay];
}
