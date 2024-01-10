function solution(s) {
    const existingNum = [];
    const answer = [];

    for (let i = 0; i < s.length; i++) {
        let count = 0;

        if (!existingNum.includes(s[i])) {
            existingNum.push(s[i]);
            answer.push(-1);
            continue;
        }

        for (let j = i - 1; j >= 0; j--) {
            count++;
            if(s[i] === s[j]) {
                answer.push(count);
                break;
            }
        }
    }

    return answer;
}