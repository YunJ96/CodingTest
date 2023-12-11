function solution(s) {
    let arr = [];

    for (let i = 0; i < s.length; i++) {
        if (arr.length > 0 && arr[arr.length - 1] === s[i]) {
            arr.pop();
        } else {
            arr.push(s[i]);
        }
    }

    return arr.length === 0 ? 1 : 0;

//     let arr = s.split('');

//     while (true) {
//         let isDuplicate = false;

//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] === arr[i + 1]) {
//                 arr.splice(i, 2);
//                 isDuplicate = true;
//                 break;
//             }
//         }

//         if (!isDuplicate) {
//             break;
//         }
//     }

//     return arr.length === 0 ? 1 : 0;
}
