function solution(n) {
    let arr = [];
    let divide = 2;
    
    while (n > 1) {
        if (n % divide === 0) {
            n = n / divide
            arr.push(divide);
        } else {
            divide++
        }
    }
    
    const answer = arr.filter((element, index) => {
        return arr.indexOf(element) === index;
    });
    
    return answer;
}