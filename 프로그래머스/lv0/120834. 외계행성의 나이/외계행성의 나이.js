function solution(age) {
    let answer = '';
    const str = age + '';
    for (let i = 0; i < str.length; i++) {
        answer += String.fromCharCode(Number(str[i]) + 97);
    }
    return answer;
}