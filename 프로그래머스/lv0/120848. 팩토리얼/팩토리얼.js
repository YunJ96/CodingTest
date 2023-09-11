function solution(n) {
    let num = 1;
    let answer = 1;
    while (n >= answer) {
        num++;
        answer *= num;
    }
    return num - 1;
}