function solution(arr, idx) {
    const slicedArray = arr.slice(idx, arr.length);
    return slicedArray.indexOf(1) === -1 ? -1 : idx + slicedArray.indexOf(1);
}