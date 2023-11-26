// 같은 숫자는 싫어
// https://school.programmers.co.kr/learn/courses/30/lessons/12906
function solution(arr) {
    // 스택 생성
    const stackArr = [arr[0]];

    for (num of arr) {
        // 새로 들어온 숫자가 스택의 마지막 요소와 같으면 
        // 스택의 마지막 요소를 pop하고 새로 들어온 숫자를 push한다.
        if (stackArr[stackArr.length - 1] === num) {
            stackArr.pop();
            stackArr.push(num);
        }
        // 새로 들어온 숫자가 스택의 마지막 요소와 같지 않으면
        // 새로 들어온 숫자를 push한다.
        else
            stackArr.push(num);
    }

    return (stackArr);
}

// const arr = [1,1,3,3,0,1,1];
// console.log(solution(arr));