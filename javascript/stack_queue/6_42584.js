// 주식가격
// https://school.programmers.co.kr/learn/courses/30/lessons/42584
function solution(prices) {
    // 스택 생성
    const stack = [];
    const answer = new Array(prices.length).fill(0);

    for (let i = 0; i < prices.length; i++) {
        // 스택의 맨 위에 있는 요소를 top으로 설정
        let top = stack[stack.length - 1];

        // prices 배열의 모든 요소를 처리한 경우 스택이 빌때까지 pop 하고 결과를 return함
        if (i === prices.length - 1) {
            while (stack.length) {
                const popped = stack.pop();
                answer[popped.idx] = i - popped.idx;
            }
            return (answer);
        }
        // 스택이 비어있지 않고 스택의 top이 새로 들어올 요소보다 클 경우
        // 스택의 top이 새로 들어올 요소와 같거나 작아질때 까지 pop하고 top 재설정
        while (top && top.val > prices[i]) {
            const popped = stack.pop();
            answer[popped.idx] = i - popped.idx;
            top = stack[stack.length - 1];
        }
        // 반복 loop마다 스택에는 새로 들어올 요소의 인덱스와 값을 push함
        stack.push({ idx: i, val: prices[i] });
    }
}

// console.log(solution([2,3,7,1,4,5,8,7]));