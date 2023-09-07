function solution(myString) {
    let arr = myString.split('x').sort();
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '') {
            s++;
        }
    }
    return arr.slice(s, arr.length);
}