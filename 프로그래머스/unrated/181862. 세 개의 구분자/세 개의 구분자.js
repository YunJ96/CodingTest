function solution(myStr) {
    
    let answer = myStr.replaceAll('a', ' ').replaceAll('b', ' ').replaceAll('c', ' ').split(' ').filter(e => e !== '');
    
    if (answer.length === 0) {
        answer.push("EMPTY");
    }
    return answer;
}
