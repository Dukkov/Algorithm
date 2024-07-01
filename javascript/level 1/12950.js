// 행렬의 덧셈
// https://school.programmers.co.kr/learn/courses/30/lessons/12950
function solution(arr1, arr2) {
  return arr2.map((arr, arrIdx) => {
    return arr.map((val, valIdx) => (val += arr1[arrIdx][valIdx]));
  });
}
