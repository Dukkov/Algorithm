// 기능개발
// https://school.programmers.co.kr/learn/courses/30/lessons/42586
function solution(progresses, speeds) {
    const queueArr = progresses;
    const answer = [];

    while (queueArr.length) {
        for (let i = 0; i < queueArr.length; i++) {
            queueArr[i] += speeds[i];
        }
        if (queueArr[0] >= 100) {
            let count = 0;
            while (queueArr[0] >= 100 && queueArr.length) {
                queueArr.shift();
                speeds.shift();
                count++;
            }
            answer.push(count);
        }
    }
    return (answer);
}

// const progresses = [93, 30, 55];
// const speeds = [1, 30, 5];
const progresses = [95, 90, 99, 99, 80, 99];
const speeds = [1, 1, 1, 1, 1, 1];
console.log(solution(progresses, speeds));