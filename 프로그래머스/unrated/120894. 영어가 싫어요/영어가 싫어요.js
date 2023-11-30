function solution(numbers) {
    const numArr
        = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for (let i = 0; i < numArr.length; i++) {
        numbers = numbers.replaceAll(numArr[i], i);
    }
    
    return Number(numbers);
}