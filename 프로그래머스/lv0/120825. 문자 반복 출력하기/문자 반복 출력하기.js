function solution(my_string, n) {
    let answer = '';
    for(let i = 0; i < my_string.length; i++) {
        answer = answer + my_string.charAt(i).repeat(n)
    }
    return answer;
}      