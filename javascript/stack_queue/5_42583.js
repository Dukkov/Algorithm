// 다리를 지나는 트럭
// https://school.programmers.co.kr/learn/courses/30/lessons/42583
function solution(bridge_length, weight, truck_weights) {
    // 큐는 다리 위의 상황을 나타냄. 큐가 [0, 0] 이라면 다리 길이는 2이고 다리가 비었음을 뜻함
    const queue = new Array(bridge_length).fill(0);
    const arrived = [];
    const truckNum = truck_weights.length;
    let sec = 0;

    // 도착한 트럭을 넣는 arrived 배열의 길이가 총 트럭의 갯수와 같아질때까지 반복
    while (arrived.length < truckNum) {
        // 매 loop마다 트럭이 전진하므로 큐를 dequeue한다.
        // 큐를 dequeue한 값이 0이 아닌 경우, 트럭이 다리를 지나왔음을 의미함
        // 트럭이 다리를 지나온 경우 arrived 배열에 추가함
        const dequeued = queue.shift();
        if (dequeued)
            arrived.push(dequeued);

        const weightSum = queue.reduce((acc, cur) => acc + cur, 0);
        
        // 큐에 들어있는 트럭 무게의 총합과 새로 들어올 트럭 무게의 합이 최대하중보다 작거나 같으면
        // 큐에 트럭을 새로 넣는다
        if (weightSum + (truck_weights[0] || weight + 1) <= weight)
            queue.push(truck_weights.shift());
        // 큐에 트럭이 새로 들어올 수 없으면 0을 넣는다
        else
            queue.push(0);
        sec++;
    }
    return (sec);
}

// console.log(solution(2, 10, [7, 4, 5 ,6]));