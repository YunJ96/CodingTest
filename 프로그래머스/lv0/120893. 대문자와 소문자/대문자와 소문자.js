function solution(my_string) {
    let answer = '';
    for (let i = 0; i < my_string.length; i++) {
        65 <= my_string.charCodeAt(i) && my_string.charCodeAt(i) <= 90
        ? answer += my_string[i].toLowerCase() : answer += my_string[i].toUpperCase()
    }
    return answer;
}