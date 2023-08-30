function solution(a, b) {
    const str_a = String(a);
    const str_b = String(b);
    return str_a + str_b >= str_b + str_a 
            ? Number(str_a + str_b) 
            : Number(str_b + str_a);
}