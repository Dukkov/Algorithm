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

// const range = (size, start) => {
//   return Array.from({ length: size }, (_, idx) => idx + start);
// };

// function solution(lines) {
//   lines.sort((a, b) => a[0] - b[0]);
//   const overlapSet = new Set();

//   for (let i = 0; i < lines.length - 1; i++) {
//     if (lines[i][1] > lines[i + 1][0]) {
//       if (lines[i][1] > lines[i + 1][1])
//         range(lines[i + 1][1] - lines[i + 1][0] + 1, lines[i + 1][0]).forEach(
//           (val) => overlapSet.add(val)
//         );
//       else
//         range(lines[i][1] - lines[i + 1][0] + 1, lines[i + 1][0]).forEach(
//           (val) => overlapSet.add(val)
//         );
//     }
//   }


// }

function solution(lines) {
  lines.sort((a, b) => a[0] - b[0]);
  const overlapSet = new Set();

  for (let i = 0; i < lines.length - 1; i++) {
    if (lines[i][1] > lines[i + 1][0]) {
      if (lines[i][1] > lines[i + 1][1])
      else
    }
  }


}
