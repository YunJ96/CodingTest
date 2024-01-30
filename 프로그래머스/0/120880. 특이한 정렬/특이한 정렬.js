function solution(numlist, n) {
    const sortedList = numlist.sort((a, b) => {
        const absA = Math.abs(a - n);
        const absB = Math.abs(b - n);

        if (absA === absB) {
            return b - a;
        }

        return absA - absB;
    });

    return sortedList;
}
