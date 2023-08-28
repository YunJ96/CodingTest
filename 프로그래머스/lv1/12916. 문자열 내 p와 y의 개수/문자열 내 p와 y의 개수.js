function solution(s){
    let answer = 0;
    let l = s.toLowerCase();
    for (let i = 0; i < l.length; i++) {
        if (l[i] === 'p') {
            answer += 1;  
        } else if (l[i] === 'y') {
            answer -= 1;
        }
    }
    return answer === 0 ? true : false;
}