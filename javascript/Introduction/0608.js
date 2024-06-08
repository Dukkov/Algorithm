// const noThreeCounter = (num, set) => {
//   const newNum = num + set.size;
//   const prevSetSize = set.size;

//   if (newNum === 1 || newNum === 2) return set.size;

//   for (let i = Math.max(...set) > 2 ? Math.max(...set) : 3; i <= newNum; i++) {
//     if (i % 3 === 0 || i.toString().includes('3')) set.add(i);
//   }

//   if (prevSetSize === set.size) return set.size;

//   return noThreeCounter(num, set);
// };

// function solution(n) {
//   const mySet = new Set();

//   return n + noThreeCounter(n, mySet);
// }

// ---

// function solution(dots) {
//   for (let i = 1; i < dots.length - 1; i++) {
//     const newDots1 = [dots[0], dots[i]];
//     const newDots2 = dots.filter((dot) => !newDots1.includes(dot));
//     const gradient1 =
//       (newDots1[0][1] - newDots1[1][1]) / (newDots1[0][0] - newDots1[1][0]);
//     const gradient2 =
//       (newDots2[0][1] - newDots2[1][1]) / (newDots2[0][0] - newDots2[1][0]);

//     if (gradient1 === gradient2) return 1;
//   }

//   return 0;
// }

// ---

// function solution(lines) {
//   lines.sort((a, b) => a[0] - b[0]);
//   const overlapSet = new Set();
//   let start;
//   let end;

//   for (let i = 0; i < lines.length - 1; i++) {
//     if (lines[i][1] >= lines[i + 1][0]) {
//       start = lines[i + 1][0];
//       end = lines[i][1] > lines[i + 1][1] ? lines[i + 1][1] : lines[i][1];

//       for (let j = start; j < end; j++) {
//         overlapSet.add(`${j}, ${j + 1}`);
//       }
//     }

//     if (i === 0 && lines[i][1] >= lines[i + 2][1]) {
//       start = lines[i + 2][0];
//       end = lines[i + 2][1];

//       for (let j = start; j < end; j++) {
//         overlapSet.add(`${j}, ${j + 1}`);
//       }
//     }
//   }

//   return overlapSet.size;
// }

// ---

const getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);

function solution(a, b) {
  const gcd = getGCD(a, b);
  b /= gcd;

  while (true) {
    if (b % 2 === 0) {
      b /= 2;
      continue;
    }
    if (b % 5 === 0) {
      b /= 5;
      continue;
    }

    return b === 1 ? 1 : 2;
  }
}
