function solution(hp) {
    let answer = 0;
    while (hp >= 1) {
        if (hp >= 5) {
            hp -= 5;
            answer += 1;
        } else if (hp >= 3) {
            hp -= 3;
            answer += 1;
        } else {
            answer += hp;
            break;
        }
    }
    return answer;
}