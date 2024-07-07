// 숫자 문자열과 영단어
// https://school.programmers.co.kr/learn/courses/30/lessons/81301
function solution(s) {
  const numMap = new Map([
    ['zero', '0'],
    ['one', '1'],
    ['two', '2'],
    ['three', '3'],
    ['four', '4'],
    ['five', '5'],
    ['six', '6'],
    ['seven', '7'],
    ['eight', '8'],
    ['nine', '9']
  ]);
  const answer = [];
  let low = -1;

  [...s].forEach((val, idx) => {
    if (Number.isNaN(Number(val))) {
      if (low === -1) low = idx;
      else if (numMap.has(s.slice(low, idx + 1))) {
        answer.push(numMap.get(s.slice(low, idx + 1)));
        low = -1;
      }
    } else {
      if (low !== -1) {
        answer.push(numMap.get(s.slice(low, idx)));
        low = -1;
      }
      answer.push(val);
    }
  });

  return Number(answer.join(''));
}
