function solution(my_string) {
    const gather = ['a', 'e', 'i', 'o', 'u'];
    let arr = my_string.split('');
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < gather.length; j++) {
            if (arr[i] === gather[j]) {
                arr = arr.filter((e) => e !== gather[j])
            }
        }
    }
    return arr.join('');
}