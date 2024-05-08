// function solution(dot) {
//   if (dot[0] > 0) {
//     if (dot[1] > 0) return 1;

//     return 4;
//   }

//   if (dot[1] > 0) return 2;

//   return 3;
// }

// ---

// function solution(num_list, n) {
//   const answer = [];

//   for (let i = 0; i < num_list.length / n; i++) {
//     answer.push(num_list.slice(i * n, (i + 1) * n));
//   }

//   return answer;
// }

// ---

// function solution(numbers, k) {
//   return numbers[((k - 1) * 2) % numbers.length];
// }

// ---

function solution(numbers, direction) {
  if (direction === 'right') {
    numbers.unshift(numbers.pop());

    return numbers;
  }

  numbers.push(numbers.shift());

  return numbers;
}
