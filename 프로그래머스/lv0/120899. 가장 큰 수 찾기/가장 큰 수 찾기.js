function solution(array) {
    const a = Math.max(...array);
    const b = array.findIndex(e => e === a);
    return [a, b];
}