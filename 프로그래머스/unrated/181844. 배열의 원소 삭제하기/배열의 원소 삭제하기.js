function solution(arr, delete_list) {
    return arr.filter((e) => {
        return !delete_list.includes(e)
    });
}