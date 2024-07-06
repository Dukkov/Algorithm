// 가장 가까운 같은 글자
// https://school.programmers.co.kr/learn/courses/30/lessons/142086
function solution(s) {
  const charMap = new Map();
  let result;

  return s.split('').map((char, idx) => {
    if (charMap.has(char)) {
      result = idx - charMap.get(char);
      charMap.set(char, idx);

      return result;
    } else {
      charMap.set(char, idx);

      return -1;
    }
  });
}
