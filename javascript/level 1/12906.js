// 같은 숫자는 싫어
// https://school.programmers.co.kr/learn/courses/30/lessons/12906
function solution(arr) {
  const answer = [arr[0]];
  let top;

  arr.forEach((val) => {
    top = answer.pop();
    answer.push(top);

    if (val !== top) answer.push(val);
  });

  return answer;
}
