function solution(n, m) {
    const min = Math.min(n,m);
    const max = Math.max(n,m);
    let commonDivisor;
    
    for (let i = 1;i <= min; i++) {
        if(max % i === 0 && min % i === 0)
            commonDivisor = i
    }
    
    return [commonDivisor , n * m / commonDivisor];
}