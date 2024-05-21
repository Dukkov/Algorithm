// function solution(message) {
//   return message.length * 2;
// }

// ---

// function solution(array) {
//   const maxVal = Math.max(...array);

//   return [maxVal, array.indexOf(maxVal)];
// }

// ---

// function solution(my_string) {
//   let answer = 0;
//   const strArr = my_string.split(' ');
//   const operatorStack = [];

//   for (let val of strArr) {
//     if (isNaN(val)) operatorStack.push(val);
//     else {
//       if (operatorStack.length === 0 || operatorStack.pop() === '+')
//         answer += Number(val);
//       else answer -= Number(val);
//     }
//   }

//   return answer;
// }

// ---

function solution(s1, s2) {
  const answer = s1.filter((str) => s2.includes(str));

  return answer.length;
}
