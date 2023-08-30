function solution(names) {
    return names.filter((e, index) => {
        return index % 5 === 0
    });
}