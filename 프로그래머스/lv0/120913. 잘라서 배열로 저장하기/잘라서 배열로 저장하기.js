function solution(my_str, n) {
    let answer = [];
    let arr = my_str.split('');
    while (arr.length > 0) {
        answer.push(arr.slice(0, n).join(''));
        arr = arr.slice(n, arr.length);
    }
    return answer;
}