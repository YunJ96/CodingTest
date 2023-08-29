function solution(num) {
    if (num === 1) {
        return 0;
    } else {
        let count = 0;
        while (count <= 500) {
            count++
            if (num === 1) {
                return count - 1;
            } else if (num % 2 === 0) {
                num = num / 2;
            } else if (num % 2 === 1) {
                num = num * 3 + 1;
            }
        }
        return -1;
    }
}