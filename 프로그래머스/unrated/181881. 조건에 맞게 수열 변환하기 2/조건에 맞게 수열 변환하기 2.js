function solution(arr) {
    let cur = arr.slice();
    let pre = [];
    let answer = -1;
    
    while (!equal(pre, cur)) {
        pre = cur.slice();
        cur = cur.map((e) => {
            if (e >= 50 && e % 2 === 0) {
                return e / 2;
            } else if (e < 50 && e % 2 === 1) {
                return (e * 2) + 1;
            } else {
                return e;
            }
        });
        answer++;
    }
    
    return answer;
}

function equal(arr1, arr2) {
    if (arr1.length === 0) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
