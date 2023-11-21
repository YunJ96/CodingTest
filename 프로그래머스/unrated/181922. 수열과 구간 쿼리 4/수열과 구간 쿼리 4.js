function solution(arr, queries) {
    let answer = [...arr];
    for (let i = 0; i < answer.length; i++) {
        for (let j = 0; j < queries.length; j++) {
                if (queries[j][0] <= i && i <= queries[j][1]
                    && i % queries[j][2] === 0) {
                answer[i]++
            }
        }
    }
    return answer;
}