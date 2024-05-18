// function solution(s) {
//   let previous = s.split(' ')[0];
//   let answer = 0;

//   for (val of s.split(' ')) {
//     if (val === 'Z') answer -= previous;
//     else {
//       previous = Number(val);
//       answer += Number(val);
//     }
//   }

//   return answer;
// }

// ---

// function solution(strlist) {
//   return strlist.map((str) => str.length);
// }

// ---

// function solution(my_string) {
//   return [...new Set(my_string)].join('');
// }

// ---

function solution(sides) {
  const sortedArr = sides.sort((a, b) => a - b);

  return sortedArr[0] + sortedArr[1] > sortedArr[2] ? 1 : 2;
}
