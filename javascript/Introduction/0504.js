// function solution(my_string) {
//   return my_string.split('').reverse().join('');
// }

// ---

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//   input = line.split(' ');
// }).on('close', function () {
//   for (let i = 1; i <= input[0]; i++) {
//     console.log('*'.repeat(i));
//   }
// });

// ---

// function solution(num_list) {
//   let oddCnt = 0;
//   let evenCnt = 0;

//   for (const num of num_list) {
//     if (num % 2 === 0) evenCnt++;
//     else oddCnt++;
//   }

//   return [evenCnt, oddCnt];
// }

// ---

function solution(my_string, n) {
  let answer = '';

  for (let i = 0; i < my_string.length; i++) {
    answer += my_string[i].repeat(n);
  }

  return answer;
}
