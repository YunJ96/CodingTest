function solution(array, commands) {
    let answer = [];
    for (let i = 0; i < commands.length; i++) {
        const slicedArr = array.slice(commands[i][0] - 1, commands[i][1]);
        const sortedArr = slicedArr.sort((a, b) => a - b);
        answer.push(sortedArr[commands[i][2] - 1]);
    }
    return answer;
}