function solution(n) {
    let count = 1;
    let answer = 1;
    
    while (count < n) {
        count++
        answer++
        
        while (answer % 3 === 0 || String(answer).includes('3')) {
            answer++
        }
    }
    
    return answer;
}