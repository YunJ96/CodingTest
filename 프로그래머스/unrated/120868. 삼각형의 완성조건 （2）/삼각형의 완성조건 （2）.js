function solution(sides) {
    let answer = 0;
    let start = Math.max(...sides) - Math.min(...sides) + 1;
    let sum = sides[0] + sides[1];
    
    while (start < sum) {
        start++
        answer++
    }
    
    return answer;
}