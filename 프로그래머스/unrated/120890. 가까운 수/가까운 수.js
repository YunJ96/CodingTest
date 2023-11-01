function solution(array, n) {
    let answer = array[0];

    for (let i = 1; i < array.length; i++) {
        let a = Math.abs(array[i] - n);
        let b = Math.abs(answer - n);

        if (a < b || (a === b && array[i] < answer)) {
            answer = array[i];
        }
    }

    return answer;
}
