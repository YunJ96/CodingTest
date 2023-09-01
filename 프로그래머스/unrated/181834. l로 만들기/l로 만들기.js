function solution(myString) {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    let answer = '';
    for (let i = 0; i < myString.length; i++) {
        arr.includes(myString[i]) ? answer += 'l' : answer += myString[i]
    }
    return answer;
}