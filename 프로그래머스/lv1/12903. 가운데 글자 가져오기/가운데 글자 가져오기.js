function solution(s) {
    const l = s.length / 2;
    return s.length % 2 === 0 ? s.slice(l - 1, l + 1)
                              : s[Math.floor(l)];
}