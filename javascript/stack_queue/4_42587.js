// 프로세스
// https://school.programmers.co.kr/learn/courses/30/lessons/42587
function solution(priorities, location) {
    // 큐 생성
    const queue = [...priorities];
    // targetIdx에 추적할 프로세스의 인덱스를 저장 
    let targetIdx = location;
    // cnt에 실행되는 순서를 저장
    let cnt = 1;

    // 실행 대기 큐가 빌때까지 반복함
    while (queue.length) {
        // 큐의 프로세스 중 우선순위가 가장 높은 프로세스의 순위와 인덱스를 찾고
        // 그보다 앞에 위치한 프로세스들을 큐에 dequeue하고 다시 enqueue함
        let maxVal = Math.max(...queue);
        let maxIdx = queue.indexOf(maxVal);
        const dequeued = queue.splice(0, maxIdx);
        queue.push(...dequeued);

        // 추적 중인 프로세스의 인덱스 재설정
        if (targetIdx >= maxIdx)
            targetIdx -= maxIdx
        else
            targetIdx += (queue.length - maxIdx);

        // 추적 중인 프로세스가 위의 과정을 거치고 큐의 첫번째에 있다면
        // 이번 loop에 실행할 프로세스이므로 현재 cnt 반환
        if (targetIdx === 0)
            return (cnt);
        // 추적 중인 프로세스가 위의 과정을 거치고 큐의 첫번째에 있지 않다면
        // 이번 loop에 실행할 프로세스가 아니므로 dequeue하고 인덱스, cnt 재설정
        else {
            queue.shift();
            targetIdx--;
            cnt++;
        }
    }
}

// const priorities = [2, 1, 3, 2];
// const priorities = [1, 1, 9, 1, 1, 1];
// const location = 5;
// console.log(solution(priorities, location));