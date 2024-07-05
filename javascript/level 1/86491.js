// 최소직사각형
// https://school.programmers.co.kr/learn/courses/30/lessons/86491
function solution(sizes) {
  let max1 = 0;
  let max2 = 0;

  sizes.forEach((arr) => {
    if (Math.max(...arr) > max1) max1 = Math.max(...arr);
    if (Math.min(...arr) > max2) max2 = Math.min(...arr);
  });

  return max1 * max2;
}
