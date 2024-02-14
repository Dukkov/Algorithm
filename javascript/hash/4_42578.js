// 의상
// https://school.programmers.co.kr/learn/courses/30/lessons/42578
function solution(clothes) {
  let objList = {};
  let answer = 1;

  for (let element of clothes) {
    if (objList.hasOwnProperty(element[1]))
      objList[element[1]]++;
    else
      objList[element[1]] = 1;
  }

  for (let key in objList) {
    answer *= (objList[key] + 1);
  }

  return (answer - 1);
}

// const clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
// console.log(solution(clothes));