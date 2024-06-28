function solution(cards1, cards2, goal) {
    let i = 0;
    while (goal.length > i) {
        if (goal[i] === cards1[0]) {
            cards1.shift();
            i++
        } else if (goal[i] === cards2[0]) {
            cards2.shift();
            i++
        } else {
            return 'No';
        }
    }
    return 'Yes';
}