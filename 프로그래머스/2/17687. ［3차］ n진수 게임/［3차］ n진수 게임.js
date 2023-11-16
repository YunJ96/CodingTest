function solution(n, t, m, p) {
    // 진법 n
    // 미리 구할 숫자의 갯수 t
    // 게임에 참가하는 인원 m
    // 튜브의 순서 p
    let string = '';
    let answer = '';
    
    for (let i = 0; i < t * m; i ++) {
        string +=  String(i.toString(n));
    }
    
    for (let j = p - 1; j < string.length; j += m) {
        answer += string[j];
    }
    
    return answer.slice(0, t).toUpperCase();
}