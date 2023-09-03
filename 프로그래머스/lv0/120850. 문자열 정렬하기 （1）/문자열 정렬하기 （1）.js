function solution(my_string) {
    let answer = [];
    for (let i = 0; i < my_string.length; i++) {
        if (!isNaN(Number(my_string.charAt(i)))) {
            answer.push(Number(my_string.charAt(i)));
        }
    }
    return answer.sort((a ,b) => a - b);
}
