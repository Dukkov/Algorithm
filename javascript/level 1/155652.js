// 둘만의 암호
// https://school.programmers.co.kr/learn/courses/30/lessons/155652
function solution(s, skip, index) {
  const result = [];
  let shifted;

  for (const char of s) {
    shifted = char.charCodeAt(0) + index;

    for (const val of skip) {
      if (val.charCodeAt(0) > char.charCodeAt(0) && val.charCodeAt(0) < shifted)
        shifted++;
    }

    if (shifted > 122) shifted -= Math.floor(shifted / 122) * 26;

    result.push(String.fromCharCode(shifted));
  }

  return result.join('');
}
