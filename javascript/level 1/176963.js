// 추억 점수
// https://school.programmers.co.kr/learn/courses/30/lessons/176963
function solution(name, yearning, photo) {
  const nameMap = new Map();
  name.forEach((_, idx) => {
    nameMap.set(name[idx], yearning[idx]);
  });

  return photo.map((arr) =>
    arr.reduce((acc, cur) => {
      if (nameMap.has(cur)) acc += nameMap.get(cur);

      return acc;
    }, 0)
  );
}
