// [1차] 비밀지도
// https://school.programmers.co.kr/learn/courses/30/lessons/17681
function solution(n, arr1, arr2) {
  const answer = [];

  arr1.forEach((_, idx) => {
    answer.push(arr1[idx] | arr2[idx]);
  });

  return answer.map((val) => {
    return val
      .toString(2)
      .padStart(n, '0')
      .replaceAll('1', '#')
      .replaceAll('0', ' ');
  });
}
