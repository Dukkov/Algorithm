// 올바른 괄호
// https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript
// 스택을 이용해서 풀고 싶었으나 push, pop 연산의 시간이 너무 오래걸리고, s를 2번 순회해서 효율성 테스트 실패.
// function solution(s) {
//     const sArr = [...s];
//     const stack = [];

//     for (let i = 0; i < sArr.length; i++) {
//         if (sArr[i] === "(")
//             stack.push(sArr[i]);
//         else {
//             if (!stack.length)
//                 return (false);
//             else {
//                 stack.pop();
//             }
//         }
//     }

//     return (!stack.length);
// }

function solution(s) {
    let cnt = 0;
    // 입력 s를 순회하며 "("가 나왔을 때는 cnt를 증가시키고 ")"가 나오면 cnt를 감소시킨다.
    // "(" 보다 ")" 가 많이 나왔을 경우 cnt는 음수가 되며, 올바르지 않은 괄호이다.
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(")
            cnt++;
        else if (s[i] === ")")
            cnt--;
        if (cnt < 0)
            return (false);
    }
    // 순회가 끝난 뒤 cnt를 체크해서 0이 아닌경우 "("과 ")"의 갯수가 다른것이므로 올바르지 않은 괄호이다.
    if (cnt)
        return (false);
    return (true);
}

// const s = "((((())))())";
// const s = "()()()()(";
// console.log(solution(s));