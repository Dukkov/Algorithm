// K번째수
// https://school.programmers.co.kr/learn/courses/30/lessons/42748
function solution(array, commands) {
  return commands.map((arr) => {
    return array.slice(arr[0] - 1, arr[1]).sort((a, b) => a - b)[arr[2] - 1];
  });
}
