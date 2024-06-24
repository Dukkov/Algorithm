// 음양 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/76501
function solution(absolutes, signs) {
  const signedArr = absolutes.map(
    (val, idx) => (val = signs[idx] === true ? +val : -val)
  );

  return signedArr.reduce((acc, cur) => (acc += cur), 0);
}
