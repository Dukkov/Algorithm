// [1차] 다트 게임
// https://school.programmers.co.kr/learn/courses/30/lessons/17682
function solution(dartResult) {
  const answer = Array(3).fill(0);
  const bonusMap = new Map([
    ['S', 1],
    ['D', 2],
    ['T', 3]
  ]);
  const optionMap = new Map([
    ['*', 2],
    ['#', -1]
  ]);
  const resultArr = dartResult.split('');
  let round = 0;
  let currentVal;

  for (let i = 0; i < resultArr.length; i++) {
    currentVal = resultArr[i];

    if (bonusMap.has(currentVal)) {
      answer[round] = answer[round] ** bonusMap.get(currentVal);
      round++;
    } else if (optionMap.has(currentVal)) {
      round--;
      if (round > 0 && currentVal === '*')
        answer[round - 1] *= optionMap.get(currentVal);
      answer[round] *= optionMap.get(currentVal);
      round++;
    } else answer[round] = answer[round] * 10 + parseInt(currentVal);
  }

  return answer.reduce((acc, cur) => acc + cur, 0);
}
