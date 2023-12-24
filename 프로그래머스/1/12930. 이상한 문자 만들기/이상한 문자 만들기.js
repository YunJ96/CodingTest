function solution(s) {
    return s.split(' ').map(str => {
        return str.split('').map((e, index) => {
            return index % 2 === 0 ? e.toUpperCase() : e.toLowerCase();
        }).join('');
    }).join(' ');
}