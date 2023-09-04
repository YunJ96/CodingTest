function solution(num, k) {
    const a = String(num).split('').indexOf(String(k));
    return a === -1 ? -1 : a + 1;
}