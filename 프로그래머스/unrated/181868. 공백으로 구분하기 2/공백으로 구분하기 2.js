function solution(my_string) {
    let answer = [];
    
    return my_string.split(' ').map((e) => e.trim()).filter((e) => e !== '');
}