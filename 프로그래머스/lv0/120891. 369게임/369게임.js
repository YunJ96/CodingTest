function solution(order) {
    
    return String(order).split('').filter((e) => e !== '0' && e % 3 === 0).length;
}