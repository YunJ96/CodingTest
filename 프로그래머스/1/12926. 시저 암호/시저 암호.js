function solution(s, n) {
    let answer = '';
    
    for (let i = 0; i < s.length; i++) {
        const code = s[i].charCodeAt()
        if (97 <= code && code <= 122){
            answer += String.fromCharCode((code + n - 97) % 26 + 97);
        } else if (65 <= code && code <= 90){
            answer += String.fromCharCode((code + n - 65) % 26 + 65);
        } else {
            answer += ' ';
        }
    }
    
    return answer;
}