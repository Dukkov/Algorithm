// 명예의 전당 (1)
// https://school.programmers.co.kr/learn/courses/30/lessons/138477
function solution(k, score) {
  const hof = [];

  return score.map((val, idx) => {
    if (idx < k) hof.push(val);
    else if (val > Math.min(...hof)) hof[hof.indexOf(Math.min(...hof))] = val;

    return Math.min(...hof);
  });
}
