// 더 맵게
// https://school.programmers.co.kr/learn/courses/30/lessons/42626
function solution(scoville, K) {
    const heapInsert = (arr, element) => {
        arr.push(element);
        let elementIdx = arr.length - 1;
        let parentIdx = Math.floor(elementIdx / 2);
        
        while (parentIdx > 0 && arr[parentIdx] > arr[elementIdx]) {
            [arr[parentIdx], arr[elementIdx]] = [arr[elementIdx], arr[parentIdx]];
            elementIdx = parentIdx;
            parentIdx = Math.floor(elementIdx / 2);
        }

        return (arr);
    };

    const heapDelete = (arr) => {
        arr[1] = arr.pop();

        let elementIdx = 1;
        let firstChildIdx = elementIdx * 2;
        let secondChildIdx = (elementIdx * 2) + 1;
        let smallestIdx;

        while(secondChildIdx <= arr.length - 1) {
            smallestIdx = arr[firstChildIdx] < arr[secondChildIdx] ? firstChildIdx : secondChildIdx;
            if (arr[elementIdx] > arr[smallestIdx]) {
                [arr[elementIdx], arr[smallestIdx]] = [arr[smallestIdx], arr[elementIdx]];
                elementIdx = smallestIdx;
                firstChildIdx = elementIdx * 2;
                secondChildIdx = (elementIdx * 2) + 1;
            }
            else
                break;
        }

        if () {

        }
        return (arr);
    };
}