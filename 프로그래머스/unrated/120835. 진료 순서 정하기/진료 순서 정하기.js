function solution(emergency) {
    const emer = [...emergency];
    let sortedArr = emer.sort((a, b) => b - a);
    let indexedArr = sortedArr.map((value, index) => ({ value, index }));
    let answer = [];
    
    for (let i = 0; i < emergency.length; i++) {
        for (let j = 0; j < indexedArr.length; j++) {
            if (emergency[i] === indexedArr[j].value) {
                answer.push(indexedArr[j].index + 1);
            }
        }
    }
    return answer;
}