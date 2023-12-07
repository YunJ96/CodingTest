function solution(d, budget) {
    let answer = 0;
    d = d.sort((a, b) => a - b);
    
    for (let i = 0; i < d.length; i++) {
        if (budget < d[i]) {
            return answer;
        }
        budget -= d[i];
        answer++
    }
    return d.length;
}