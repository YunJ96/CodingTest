function solution(arr) {
    let stk = [];
    let i = 0;
    
    while (i < arr.length) {
        const l = stk.length;
        if (l === 0) {
            stk.push(arr[i]);
            i++;
        } else if (l !== 0 && stk[l - 1] === arr[i]) {
            stk.pop();
            i++;
        } else if (l !== 0 && stk[l - 1] !== arr[i]) {
            stk.push(arr[i]);
            i++;
        }
    }
    
    if (stk.length === 0) return [-1];
        
    return stk;
}