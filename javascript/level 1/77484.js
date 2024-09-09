// 로또의 최고 순위와 최저 순위
// https://school.programmers.co.kr/learn/courses/30/lessons/77484
function solution(lottos, win_nums) {
  const zeros = lottos.filter((val) => Number(val) === 0).length;
  const matchCnt = win_nums.filter((val) => lottos.includes(val)).length;
  const max = 7 - (matchCnt + zeros);
  const min = 7 - matchCnt;

  return [max > 6 ? 6 : max, min > 6 ? 6 : min];
}
