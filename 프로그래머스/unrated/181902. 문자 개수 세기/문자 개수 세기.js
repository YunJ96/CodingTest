function solution(my_string) {
    let arr = new Array(52).fill(0);
    // 65~90 97~122
    for (let i = 0; i < my_string.length; i++) {
        const alp = my_string.charCodeAt(i);
        if (65 <= alp && alp <= 90) {
            arr[alp - 65]++
        } else {
            arr[alp - 71]++
        }
    }
    return arr;
}