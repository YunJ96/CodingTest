function solution(i, j, k) {
    let answer = '';
    for (let e = i; e <= j; e++) {
        if (String(e).includes(k)) answer += String(e)
    }
    return answer.split('').filter((e) => e === String(k)).length;
}