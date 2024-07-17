// 과일 장수
// https://school.programmers.co.kr/learn/courses/30/lessons/135808
function solution(_, m, score) {
  const result = [];
  const sortedScore = score.sort((a, b) => b - a);
  let low = 0;
  let high = m - 1;

  while (high < sortedScore.length) {
    result.push(sortedScore[high] * m);
    low += m;
    high += m;
  }

  return result.reduce((acc, cur) => (acc += cur), 0);
}
