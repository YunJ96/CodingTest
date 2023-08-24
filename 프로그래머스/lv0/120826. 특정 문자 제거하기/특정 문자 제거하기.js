function solution(my_string, letter) {
    let arr = my_string.split('');
    let answer = arr.filter((e) => e !== letter).join('');
    return answer;
}