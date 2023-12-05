function solution(keyinput, board) {
    let answer = [0, 0];
    
    for (let i = 0; i < keyinput.length; i++) {
        switch (keyinput[i]) {
            case 'left': {
                if (answer[0] > Math.ceil(-(board[0] / 2))) {
                    answer[0]--;
                }
                break;
            }
                case 'right': {
                if (answer[0] < Math.floor(board[0] / 2)) {
                    answer[0]++;
                }
                break;
            }
                case 'up': {
                if (answer[1] < Math.floor(board[1] / 2)) {
                    answer[1]++;
                }
                break;
            }
                case 'down': {
                if (answer[1] > Math.ceil(-(board[1] / 2))) {
                    answer[1]--;
                }
                break;
            }
        }
    }
    
    
    return answer;
}