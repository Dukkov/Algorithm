// function solution(numbers) {
//   const numMap = new Map([
//     ['zero', 0],
//     ['one', 1],
//     ['two', 2],
//     ['three', 3],
//     ['four', 4],
//     ['five', 5],
//     ['six', 6],
//     ['seven', 7],
//     ['eight', 8],
//     ['nine', 9]
//   ]);

//   return Number(numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (num) => numMap.get(num)));
// }

// ---

// function solution(my_string, num1, num2) {
//   const strArr = my_string.split('');

//   [strArr[num1], strArr[num2]] = [strArr[num2], strArr[num1]];

//   return strArr.join('');
// }

// ---

// function solution(s) {
//   const answer = [];

//   for (let char of s) {
//     if (s.indexOf(char) === s.lastIndexOf(char)) answer.push(char);
//   }

//   return answer.sort().join('');
// }

// ---

function solution(n) {
  var answer = [];
  return answer;
}
