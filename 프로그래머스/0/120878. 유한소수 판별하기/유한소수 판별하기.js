function solution(a, b) {
    let aa = a, bb = b

    for(let i = 2; i <= a; i++){
        if(aa % i === 0 && bb % i === 0){
            aa /= i
            bb /= i
            i--
        }
    }

    // 기약분수 분모 
    let denominator = bb

    while(denominator % 2 === 0){
        denominator /= 2
    }

    while(denominator % 5 === 0){
        denominator /= 5
    }

    return denominator === 1 ? 1 : 2
}