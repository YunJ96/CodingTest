function solution(balls, share) {
    const factorial = (e) => {
        return e <= 1 ? 1 : e * factorial(e - 1);
    }
    
    let answer = factorial(balls) / (factorial(share) * factorial(balls - share));
    
    return Math.round(answer);
}