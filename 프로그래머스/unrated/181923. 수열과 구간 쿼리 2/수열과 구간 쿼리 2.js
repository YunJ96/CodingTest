function solution(arr, queries) {
    let answer = [];
    
    for (let j = 0; j < queries.length; j++) {
        const [s, e, k] = queries[j];

        let satisfiedNum = false;
        let satisfiedNums = [];
        
        for (let i = 0; i < arr.length; i++) {
            if (s <= i && i <= e && arr[i] > k) {
                satisfiedNums.push(arr[i]);
                satisfiedNum = true;
            }
        }
        
        if (satisfiedNum) {
            satisfiedNums.sort((a, b) => a - b);
            answer.push(satisfiedNums[0]);
        } else {
            answer.push(-1);
        }
    }

    return answer;
}
