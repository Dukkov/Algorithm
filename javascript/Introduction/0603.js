// function solution(dots) {
//   let xMax = -256;
//   let yMax = -256;
//   let xMin = 256;
//   let yMin = 256;

//   dots.forEach(val => {
//     if (val[0] < xMin) xMin = val[0];
//     if (val[0] > xMax) xMax = val[0];
//     if (val[1] < yMin) yMin = val[1];
//     if (val[1] > yMax) yMax = val[1];
//   });

//   return (xMax - xMin) * (yMax - yMin);
// };

// ---

// const locationCalculator = (keyinput, location, board) => {
//   switch (keyinput) {
//     case 'left':
//       return location[0] - 1 < -board[0] / 2
//         ? location
//         : [location[0] - 1, location[1]];
//     case 'right':
//       return location[0] + 1 > +board[0] / 2
//         ? location
//         : [location[0] + 1, location[1]];
//     case 'up':
//       return location[1] + 1 > +board[1] / 2
//         ? location
//         : [location[0], location[1] + 1];
//     case 'down':
//       return location[1] - 1 < -board[1] / 2
//         ? location
//         : [location[0], location[1] - 1];
//   }
// };

// function solution(keyinput, board) {
//   let answer = [0, 0];

//   keyinput.forEach((val) => {
//     answer = locationCalculator(val, answer, board);
//   });

//   return answer;
// }

// ---

// function solution(numbers) {
//   let max = -Infinity;

//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] * numbers[j] > max) max = numbers[i] * numbers[j];
//     }
//   }

//   return max;
// }

// ---

function solution(polynomial) {
  let coefficient = 0;
  let integer = 0;
  const answer = [];
  const arr = polynomial.split(' + ');

  arr.forEach((val) => {
    if (val.includes('x')) {
      val = val.replace('x', '');

      if (val === '') coefficient++;
      else coefficient += +val;
    } else integer += +val;
  });

  if (coefficient) {
    if (coefficient === 1) answer.push('x');
    else answer.push(`${coefficient}x`);
  }
  if (integer) answer.push(`${integer}`);

  return answer.join(' + ');
}
