// 과일 장수
// https://school.programmers.co.kr/learn/courses/30/lessons/135808
function solution(_, m, score) {
  let answer = 0;
  const result = [];
  const sortedScore = score.sort((a, b) => a - b);
  let low = 0;
  let high = m - 1;

  while (high < sortedScore.length) {
    result.push(sortedScore[low++] * m);
    high++;
  }
  console.log(result);

  for (let i = 0; i < Math.floor(sortedScore.length / m); i++) {
    answer += result.pop();
  }

  return answer;
}
