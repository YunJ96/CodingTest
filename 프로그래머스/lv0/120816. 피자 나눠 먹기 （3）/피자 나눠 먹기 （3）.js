function solution(slice, n) {
    if (n % slice === 0) {
        return n / slice;
    } else if (slice > n) {
        return 1;
    } else if (n % slice != 0) {
        return Math.floor(n / slice) + 1;
    }
}