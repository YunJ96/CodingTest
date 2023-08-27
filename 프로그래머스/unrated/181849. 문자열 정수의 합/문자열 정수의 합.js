function solution(num_str) {
    let answer = 0;
    for (let i = 0; i < num_str.length; i++) {
        num_str[i] !== '0' ? answer += Number(num_str[i]) : null;
    }
    return answer;
}