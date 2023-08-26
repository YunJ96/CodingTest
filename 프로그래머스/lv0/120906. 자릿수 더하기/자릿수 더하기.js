function solution(n) {
    let answer = 0;
    const s = n.toString();
    for(let i = 0; i < s.length; i++) {
        answer = answer + Number(s.charAt(i));
    }
    return answer;
}