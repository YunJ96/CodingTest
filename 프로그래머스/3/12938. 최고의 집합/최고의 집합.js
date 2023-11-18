function solution(n, s) {
    if (n > s) return [-1];
    
    let answer = [];
    
    for (let i = n; i > 0; i--) {
        const num = Math.floor(s / i)
        answer.push(num);
        s -= num;
    }
    return answer;
}