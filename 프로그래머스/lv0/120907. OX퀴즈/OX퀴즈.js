function solution(quiz) {
    let answer = [];
    for (let i = 0; i < quiz.length; i++) {
        const arr = quiz[i].split(' ');
        const num1 = parseInt(arr[0]);
        const num2 = parseInt(arr[2]);
        const result = parseInt(arr[4]);
        if (arr[1] === '+' && num1 + num2 === result) {
            answer.push('O')
        } else if (arr[1] === '-' && num1 - num2 === result) {
            answer.push('O')
        } else {
            answer.push('X')
        }
    }
    return answer;
}