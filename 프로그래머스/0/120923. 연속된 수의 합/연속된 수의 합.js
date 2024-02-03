function solution(num, total) {
  let arr = [];
    
  for(let i = Math.floor(num / 2 * -1); i< Math.floor(num / 2 * -1) + num; i++) {
      arr.push(i);
    }
    
  arr.length = num;
    
  while (arr.reduce((acc, e, i)=> acc + e, 0) !== total) {
    arr = arr.map(e => e + 1);
  }
  return arr;
}