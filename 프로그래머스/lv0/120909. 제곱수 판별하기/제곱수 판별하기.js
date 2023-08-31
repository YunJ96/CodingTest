function solution(n) {
    return Math.pow(Math.ceil(Math.sqrt(n)), 2) === n ? 1 : 2;
}