function solution(strArr) {
    return strArr.map((e, index) => {
        return index === 0 || index % 2 === 0 ? e.toLowerCase() : e.toUpperCase()
    });
}