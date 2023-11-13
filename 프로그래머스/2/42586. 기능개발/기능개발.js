function solution(progresses, speeds) {
    let answer = [];
    let a = [];
    
    for (let i = 0; i < progresses.length; i++) {
        a.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    
    let count = 1;
    let maxDay = a[0];
    
    for (let i = 1; i < a.length; i++) {
        if (a[i] <= maxDay) {
            count++;
        } else {
            answer.push(count);
            count = 1;
            maxDay = a[i];
        }
    }
    answer.push(count);
    return answer;
}
