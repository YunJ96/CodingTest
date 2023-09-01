function solution(n, numlist) {
    let answer = [];
    for (let i = 0; i < numlist.length; i++) {
        numlist[i] % n === 0 ? answer.push(numlist[i]) : null
    }
    return answer;
}