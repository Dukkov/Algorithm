// 2016년
// https://school.programmers.co.kr/learn/courses/30/lessons/12901
function solution(a, b) {
  const dayMap = new Map([
    [0, 'SUN'],
    [1, 'MON'],
    [2, 'TUE'],
    [3, 'WED'],
    [4, 'THU'],
    [5, 'FRI'],
    [6, 'SAT']
  ]);

  return dayMap.get(new Date(`2016-${a}-${b}`).getDay());
}
