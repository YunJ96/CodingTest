function solution(numbers) {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let answer = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (arr.includes(numbers[i])) {
            answer += numbers[i];
        }
    }
    return 45 - answer;
}