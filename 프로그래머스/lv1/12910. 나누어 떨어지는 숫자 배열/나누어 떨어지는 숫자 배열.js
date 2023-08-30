function solution(arr, divisor) {
    const filteredArr = arr
                        .filter((e) => e % divisor === 0)
                        .sort((a, b) => a - b);
    return filteredArr.length === 0 ? [-1] : filteredArr;
}