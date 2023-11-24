function solution(s) {
    let count = 0;
    let zeroCount = 0
    
    while(s !== '1'){
        const before = s.length
        const current = s.replace(/0/gi,'').length

        count++;
        zeroCount += (before - current);

        s = current.toString(2);
    }
    
    return [count, zeroCount];
}