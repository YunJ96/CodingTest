const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
 
    const answer = str.replace(/[A-z]/gi, (string) => {
        if (string === string.toUpperCase()) {
            return string.toLowerCase();
        } else {
            return string.toUpperCase();
        }
    })
    console.log(answer);
});