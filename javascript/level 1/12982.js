// 예산
// https://school.programmers.co.kr/learn/courses/30/lessons/12982
function solution(d, budget) {
  let sum = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; sum < budget; i++) {
    sum += d[i];

    if (sum === budget) return i + 1;
    if (sum > budget) return i;
  }

  return d.length;
}
