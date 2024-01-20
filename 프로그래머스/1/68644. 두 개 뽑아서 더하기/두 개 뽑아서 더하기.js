function solution(numbers) {
    let arr = [];
    let index = 0;
    let answer = [];
    while (index < numbers.length - 1) {
        for (let i = index + 1; i < numbers.length; i++) {
            arr.push(numbers[index] + numbers[i]);
        }
        index++
    }
    
    arr.forEach((e) => {
        if (!answer.includes(e)) {
            answer.push(e);
        }
    });
    
    return answer.sort((a, b) => a - b);
}