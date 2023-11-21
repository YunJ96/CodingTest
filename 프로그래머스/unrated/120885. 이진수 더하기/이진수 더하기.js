function solution(bin1, bin2) {
    const revBin1 = [...bin1].reverse();
    const a = revBin1.reduce((acc, cur, idx) => {
        return idx === 0 ? acc + Number(cur) : acc + Number(cur) * Math.pow(2, idx)
    }, 0)
    const revBin2 = [...bin2].reverse();
    const b = revBin2.reduce((acc, cur, idx) => {
        return idx === 0 ? acc + Number(cur) : acc + Number(cur) * Math.pow(2, idx)
    }, 0)
    
    return (a + b).toString(2);
}