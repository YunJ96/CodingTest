function solution(M, N) {
    let answer = 0;
        if (M === 1 && N === 1) {
            return 0;
        } else {
            answer += M * N - 1;
        }
        return answer;
    }