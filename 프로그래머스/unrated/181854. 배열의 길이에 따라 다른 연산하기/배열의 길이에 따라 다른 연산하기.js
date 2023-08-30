function solution(arr, n) {
    return arr.length % 2 === 1 
           ? arr.map((e, index) => {
             return index % 2 === 0 ? e + n : e 
        }) : arr.map((e, index) => {
             return index === 1 || index % 2 === 1 ? e + n : e
    })
}