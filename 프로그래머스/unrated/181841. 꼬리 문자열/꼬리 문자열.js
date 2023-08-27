function solution(str_list, ex) {
    var answer = '';
    for (let i = 0; i < str_list.length; i++) {
        str_list[i].includes(ex) ? answer += '' : answer += str_list[i];
    }
    return answer;
}