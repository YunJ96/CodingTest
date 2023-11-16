function solution(operations) {
    let answer = [];
    for (let i = 0; i < operations.length; i++) {
        if (operations[i][0] === 'I') {
            const num = operations[i].split(' ');
            answer.push(Number(num[1]));
        } else if (operations[i] === 'D 1') {
            const max = Math.max(...answer);
            const index = answer.indexOf(max);
            answer.splice(index, 1);
        } else if (operations[i] === 'D -1') {
            const min = Math.min(...answer);
            const index = answer.indexOf(min);
            answer.splice(index, 1);
        }
    }
    if (answer.length === 0) return [0,0]
    const sortedAnswer = answer.sort((a, b) => b - a);
    return [sortedAnswer[0],sortedAnswer[sortedAnswer.length - 1]];
}