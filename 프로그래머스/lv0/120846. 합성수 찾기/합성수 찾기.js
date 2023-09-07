function solution(n) {
    if (n < 4) return 0;
    let answer = 0;
    
    for (let i = 4; i <= n; i++) {
        let num = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) num++
        }
        if (num > 2) {
            answer++;
        }
    }
    return answer;
}