function solution(n) {
    let answer = 0;
    if (n % 2 === 0) {
        for (let i = 2; i <= n; i += 2) {
            answer += i ** 2
        }
    } else {
        return ((n + 1) / 2) ** 2;
    }
    return answer;
}
