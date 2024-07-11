// 폰켓몬
// https://school.programmers.co.kr/learn/courses/30/lessons/1845
function solution(nums) {
  const numSet = new Set(nums);

  return nums.length / 2 < numSet.size ? nums.length / 2 : numSet.size;
}
