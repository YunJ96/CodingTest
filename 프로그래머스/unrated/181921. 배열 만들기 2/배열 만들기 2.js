function solution(l, r) {
    let answer = []
    
    for (let i = l ; i <= r ; i++){
        let str = i.toString();
        let j = 0;
        let sum = 0;
        
        while (j !== str.length){
            if (str[j].includes("5") || str[j].includes("0")) {
                sum++;
            }

            if (sum === str.length) {
                answer.push(Number(str));
                break;
            }
            j++;    
        }
    }
    
    if (answer.length === 0) return [-1];
    
    return answer;
}