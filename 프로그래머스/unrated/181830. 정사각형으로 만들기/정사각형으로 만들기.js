function solution(arr) {
    const maxDimension = Math.max(arr.length, arr[0].length);

    while (arr.length < maxDimension) {
        arr.push(Array(arr[0].length).fill(0));
    }

    for (let i = 0; i < arr.length; i++) {
        while (arr[i].length < maxDimension) {
            arr[i].push(0);
        }
    }

    return arr;
}
