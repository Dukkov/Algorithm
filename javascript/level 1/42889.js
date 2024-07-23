// 실패율
// https://school.programmers.co.kr/learn/courses/30/lessons/42889
function solution(N, stages) {
  const stageMap = new Map();
  const failMap = new Map();
  let denominator = stages.length;

  stages.forEach((val) => {
    stageMap.has(val)
      ? stageMap.set(val, stageMap.get(val) + 1)
      : stageMap.set(val, 1);
  });

  for (let i = 1; i <= N; i++) {
    failMap.set(i, (stageMap.get(i) || 0) / denominator);
    denominator -= stageMap.get(i) || 0;
  }

  return [...failMap]
    .sort((a, b) => {
      if (a[1] > b[1]) return -1;
      if (a[1] === b[1]) return a[0] > b[0] ? 1 : -1;
    })
    .map((arr) => arr[0]);
}
