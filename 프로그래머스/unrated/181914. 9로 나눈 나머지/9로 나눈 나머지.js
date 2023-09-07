function solution(number) {
    return number
            .split('')
            .reduce((acc, cur) => parseInt(acc) + parseInt(cur)) % 9;
}