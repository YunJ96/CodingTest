function solution(strArr) {
    let map = new Map();
    
    for (let i = 0; i < strArr.length; i++) {
        const strlength = strArr[i].length;
        if (map.has(strlength)) {
            map.set(strlength, map.get(strlength) + 1);
        } else {
            map.set(strlength, 1)
        }
    }
    
    let maxValue = 0;
    for (let [key, value] of map.entries()) {
        if (value > maxValue) {
            maxValue = value;
        }
    }

    return maxValue;
}