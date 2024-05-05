// function solution(numbers, num1, num2) {
//   return numbers.slice(num1, num2 + 1);
// }

// ---

// function solution(age) {
//   const answer = [];
//   const asciiArr = [...age.toString(10)].map(Number).map((num) => num + 97);

//   for (num of asciiArr) {
//     answer.push(String.fromCharCode(num));
//   }

//   return answer.join('');
// }

// ---

// function solution(emergency) {
//   let answer = [];

//   for (let i = 0; i < emergency.length; i++) {
//     let order = emergency.length;

//     for (let j = 0; j < emergency.length; j++) {
//       if (emergency[i] > emergency[j]) order--;
//     }

//     answer[i] = order;
//   }

//   return answer;
// }

// ---

function solution(n) {
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) cnt++;
  }

  return cnt;
}
