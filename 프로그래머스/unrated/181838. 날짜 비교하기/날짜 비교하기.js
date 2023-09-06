function solution(date1, date2) {
    return Number(date1.reduce((acc, cur) => String(acc) + String(cur)))
        < Number(date2.reduce((acc, cur) => String(acc) + String(cur)))
        ? 1 : 0;
}