// 핸드폰 번호 가리기
// https://school.programmers.co.kr/learn/courses/30/lessons/12948
function solution(phone_number) {
  const exceptIdx = phone_number.length - 4;

  return phone_number
    .split('')
    .map((val, idx) => {
      if (idx < exceptIdx) val = '*';

      return val;
    })
    .join('');
}
