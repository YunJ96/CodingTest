function solution(binomial) {
    const arr = binomial.split(' ');
    const a = Number(arr[0]);
    const b = Number(arr[2]);
    const sign = arr[1];
    return sign === '+' ? a + b 
         : sign === '-' ? a - b : a * b;
}