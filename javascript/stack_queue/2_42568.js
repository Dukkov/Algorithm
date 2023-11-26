// 기능개발
// https://school.programmers.co.kr/learn/courses/30/lessons/42586
function solution(progresses, speeds) {
    // 큐 생성
    const queueArr = progresses;
    const answer = [];

    // 큐에 progress가 남아있는 동안 반복함
    while (queueArr.length) {
        // 큐 내부 progress에 작업속도를 더해줌
        for (let i = 0; i < queueArr.length; i++) {
            queueArr[i] += speeds[i];
        }
        // 큐의 첫번째 요소가 작업이 완료된 경우 배포 시작
        if (queueArr[0] >= 100) {
            let count = 0;
            // 큐가 빌때까지 작업이 완료된 progress를 deque하고 count 증가
            while (queueArr[0] >= 100 && queueArr.length) {
                queueArr.shift();
                speeds.shift();
                count++;
            }
            // 작업이 미완료된 progress를 만나거나 큐가 비었을 경우 count를 answer 배열에 push
            answer.push(count);
        }
    }
    return (answer);
}

// const progresses = [93, 30, 55];
// const speeds = [1, 30, 5];
// const progresses = [95, 90, 99, 99, 80, 99];
// const speeds = [1, 1, 1, 1, 1, 1];
// console.log(solution(progresses, speeds));