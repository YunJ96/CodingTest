function solution(arr, k) {
    return arr.map((e) => {
        return k % 2 === 0 ? e + k : e * k
    });
}