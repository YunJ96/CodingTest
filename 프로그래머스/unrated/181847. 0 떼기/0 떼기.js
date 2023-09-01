function solution(n_str) {
    let arr = n_str.split('');
    
    if (arr[0] !== '0') {
        return n_str;
    } else {
        let i = 0;
        while (arr[i] === '0') {
            arr.shift();
        }
        return arr.join('');
    }
}