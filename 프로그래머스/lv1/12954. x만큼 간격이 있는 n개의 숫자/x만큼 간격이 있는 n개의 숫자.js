function solution(x, n) {
    return Array(n).fill(x).map((num, index) => num * (index + 1));
}