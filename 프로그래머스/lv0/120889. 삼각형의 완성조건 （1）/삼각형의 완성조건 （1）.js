function solution(sides) {
    const arr = sides.sort();
    if (arr[2] < arr[0] + arr[1]) {
        return 1;
    } else {
        return 2;
    }
}