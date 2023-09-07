function solution(arr) {
    const num1 = arr.indexOf(2);
    const num2 = arr.reverse().indexOf(2);
    if (!arr.includes(2)) {
        return [-1];
    }
    return arr.reverse().slice(num1, arr.length - num2);
}