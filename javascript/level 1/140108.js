// 문자열 나누기
// https://school.programmers.co.kr/learn/courses/30/lessons/140108
function solution(s) {
  let x = null;
  let xCnt = 0;
  let charCnt = 0;
  let splitCnt = 0;

  for (const val of s) {
    if (x === null) x = val;

    if (x === val) xCnt++;
    else charCnt++;

    if (xCnt === charCnt) {
      splitCnt++;
      x = null;
      xCnt = 0;
      charCnt = 0;
    }
  }

  if (x !== null) splitCnt++;

  return splitCnt;
}
