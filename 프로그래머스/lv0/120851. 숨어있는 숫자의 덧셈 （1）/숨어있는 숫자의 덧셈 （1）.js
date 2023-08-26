function solution(my_string) {
    let answer = 0;
    for(let i = 0; i < my_string.length; i++) {
        if(Number(my_string.charAt(i))) {
            answer = answer + Number(my_string.charAt(i));
        }
    }
    return answer;
}