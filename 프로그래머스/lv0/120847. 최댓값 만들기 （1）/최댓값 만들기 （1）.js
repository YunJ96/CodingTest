function solution(numbers) {
    let a = numbers.sort((a,b) => {
        return a - b ;
    });
    let b = numbers.pop();
    let c = numbers.pop();
    return b*c;
}