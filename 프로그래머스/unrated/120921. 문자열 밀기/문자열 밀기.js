function solution(A, B) {
    let answer = -1;
    
    if (A === B) {
        return 0;
    }
    
    for (let i = 1; i < A.length; i++) {
        const str1 = A.slice(-i)
        const str2 = A.slice(0, A.length - i)
        
        if (str1.concat(str2) === B) {
            answer = i;
            break;
        }
    }
    
    return answer;
}