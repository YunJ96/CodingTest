function solution(food) {
    var answer = '';
    var tempArr = [];

    for(var i=1; i<food.length; i++) {
        tempArr.push(Math.floor(food[i]/2))   
    }  
    for(var i=0; i<=tempArr.length; i++) {
        answer += String(i+1).repeat(tempArr[i])
    }

    var str_reverse = answer.split('').reverse().join('');
    answer += 0;
    answer += str_reverse;
    
    return answer;
}