function solution(my_string, s, e) {
    const arr = my_string.split('');
    const reverse = arr.slice(s, e + 1).reverse();
    arr.splice(s, e - s + 1, ...reverse);
    return arr.join('');
}