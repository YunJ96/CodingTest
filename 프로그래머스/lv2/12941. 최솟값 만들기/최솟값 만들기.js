function solution(A,B){
    let answer = 0;
    const a_arr = A.sort((a, b) => b - a);
    const b_arr = B.sort((a, b) => a - b);
    for (let i = 0; i < a_arr.length; i++) {
        answer += a_arr[i] * b_arr[i];
    }
    return answer;
}