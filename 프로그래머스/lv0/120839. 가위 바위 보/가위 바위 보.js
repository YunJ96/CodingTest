function solution(rsp) {
    let answer = '';
    for (let i = 0; i < rsp.length; i++) {
        rsp[i] === '0' ? answer += '5'
                    : rsp[i] === '2' ? answer += '0'
                    : answer += '2'
    }
    return answer;
}