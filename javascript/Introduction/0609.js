// function solution(numlist, n) {
//   const answer = [];
//   const numMap = new Map();
//   let minKey;

//   numlist.forEach((num) => numMap.set(num - n, num));

//   while (numMap.size) {
//     minKey = Math.min(...Array.from(numMap.keys()).map((num) => Math.abs(num)));

//     if (numMap.has(minKey)) {
//       answer.push(numMap.get(minKey));
//       numMap.delete(minKey);
//     }

//     if (numMap.has(-minKey)) {
//       answer.push(numMap.get(-minKey));
//       numMap.delete(-minKey);
//     }
//   }

//   return answer;
// }

// ---

// function solution(score) {
//   let answer = Array(score.length).fill(0);
//   let maxIdxArr = [];
//   let maxScore;
//   let rank = 1;
//   const avgScoreArr = score.map((arr) => (arr[0] + arr[1]) / 2);

//   while (answer.some((val) => val === 0)) {
//     maxScore = Math.max(...avgScoreArr);

//     avgScoreArr.forEach((val, idx) => {
//       if (val === maxScore) maxIdxArr.push(idx);
//     });

//     maxIdxArr.forEach((idx) => {
//       answer[idx] = rank;
//       avgScoreArr[idx] = null;
//     });

//     rank += maxIdxArr.length;
//     maxIdxArr.length = 0;
//   }

//   return answer;
// }

// ---

// function solution(babbling) {
//   let answer = 0;
//   const delimiter = new RegExp('aya|ye|woo|ma', 'g');

//   babbling.forEach((word) => {
//     if (word.length !== 0) {
//       if (word.replace(delimiter, '').length === 0) answer++;
//     }
//   });

//   return answer;
// }

// ---

function solution(id_pw, db) {
  const dbMap = new Map(db);

  if (dbMap.has(id_pw[0])) {
    return dbMap.get(id_pw[0]) === id_pw[1] ? 'login' : 'wrong pw';
  }

  return 'fail';
}
