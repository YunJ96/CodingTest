function solution(money) {
    if (money < 5500) return [0, money];
    let answer = [];
    answer.push(Math.floor(money / 5500));
    answer.push(money - (Math.floor(money / 5500) * 5500));
    return answer;
}