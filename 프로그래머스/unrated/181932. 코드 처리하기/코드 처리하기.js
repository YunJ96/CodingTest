function solution(code) {
    let mode = 0;
    const ret = code.split('').filter((e, index)=>{
        if (e === '1') {
            if (mode === 0) {
                mode = 1;
            } else {
                mode = 0;
            }
            return false
        }

        if (mode) {
            return index % 2===1
        }
    
        return index % 2===0
    }).join('')
    
    const answer =  ret.length !== 0 ? ret : "EMPTY";
    return answer
}