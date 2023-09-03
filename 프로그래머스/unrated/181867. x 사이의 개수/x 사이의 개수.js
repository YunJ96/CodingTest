function solution(myString) {
    let answer = [];
    let arr = myString.split('x');
    for (let i of arr) answer.push(i.length)
    return answer;
}