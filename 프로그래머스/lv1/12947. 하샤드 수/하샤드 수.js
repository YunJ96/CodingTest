function solution(x) {
    const arr = String(x).split('');
    return x % arr
        .map((e) => Number(e))
        .reduce((acc, cur) => acc + cur, 0)=== 0;
}