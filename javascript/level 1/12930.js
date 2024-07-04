// 이상한 문자 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12930
function solution(s) {
  const answer = s.split(' ');
  let strArr;

  return answer
    .map((str) => {
      strArr = str.toLowerCase().split('');

      for (let i = 0; i < strArr.length; i++) {
        if (i % 2 === 0) strArr[i] = strArr[i].toUpperCase();
      }

      return strArr.join('');
    })
    .join(' ');
}
