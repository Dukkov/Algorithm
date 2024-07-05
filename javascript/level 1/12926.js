// 시저 암호
// https://school.programmers.co.kr/learn/courses/30/lessons/12926
function solution(s, n) {
  const answer = s.split('');
  let code = 0;

  return String.fromCharCode(
    ...answer.map((char) => {
      if (char === ' ') return 32;

      code = char.charCodeAt(0);

      if (code > 96 && code < 123) {
        if (code + n > 122) return code + n - 26;
        return code + n;
      } else {
        if (code + n > 90) return code + n - 26;
        return code + n;
      }
    })
  );
}
