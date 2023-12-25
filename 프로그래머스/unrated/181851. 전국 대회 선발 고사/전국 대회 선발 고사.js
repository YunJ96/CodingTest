function solution(rank, attendance) {
    const arr = rank.map((v, index) => ({v, index}))
        .filter((e, index) => attendance[index]);
    
    arr.sort((a, b) => a.v - b.v);
    
    return (10000 * arr[0].index) + (100 * arr[1].index) + arr[2].index
}