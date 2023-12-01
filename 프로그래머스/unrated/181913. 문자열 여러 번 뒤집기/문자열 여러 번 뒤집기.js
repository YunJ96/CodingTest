function solution(my_string, queries) {
    for (let i = 0; i < queries.length; i++) {
        const arr = my_string.split('');
        const [start, end] = queries[i];
        const invalidStr = arr.slice(start, end + 1);
        const validStr = invalidStr.reverse().join('');
        my_string = my_string.slice(0, start)+ validStr + my_string.slice(end + 1);
    }
    
    return my_string;
}