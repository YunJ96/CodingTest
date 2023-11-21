function solution(s) {
    const answer = s.split(' ').map((e) => {
        if (e.length > 0) {
            return e[0].toUpperCase() + e.slice(1).toLowerCase();
        } else {
            return '';
        }
    }).join(' ')
    return answer;
}