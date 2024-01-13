function solution(arr) {
    arr.sort((a, b) => b - a);
    let answer = false;
    let isDivide = false;
    let num = arr[0];
    
    while(!isDivide){
        isDivide = arr.every((number) => num % number === 0);
        if(isDivide){
            answer = num;
            break;
        }
        num++;
    }
    return answer;
}