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

		while (firstChildIdx <= arr.length - 1) {
			if (secondChildIdx <= arr.length - 1) {
				smallestIdx = arr[firstChildIdx] < arr[secondChildIdx] ? firstChildIdx : secondChildIdx;
				[arr[elementIdx], arr[smallestIdx]] = [arr[smallestIdx], arr[elementIdx]];
				elementIdx = smallestIdx;
				firstChildIdx = elementIdx * 2;
				secondChildIdx = (elementIdx * 2) + 1;
			}
			else if (arr[elementIdx] > arr[firstChildIdx]) {
        [arr[elementIdx], arr[firstChildIdx]] = [arr[firstChildIdx], arr[elementIdx]];
        elementIdx = firstChildIdx;
        return (arr);
			}
      else
        return (arr);
		}

    return (arr);
	};

  let scovilleHeap = [null];
  let mixCnt = 0;

  for (element of scoville)
    scovilleHeap = heapInsert(scovilleHeap, element);

  // console.log(scovilleHeap);

  while (scovilleHeap[1] < K) {
    const firstFood = scovilleHeap[1];
    scovilleHeap = heapDelete(scovilleHeap);
    const secondFood = scovilleHeap[1];
    scovilleHeap = heapDelete(scovilleHeap);
    const mixedFood = firstFood + (secondFood * 2);
    scovilleHeap = heapInsert(scovilleHeap, mixedFood);
    mixCnt++;
  }

  // console.log(scovilleHeap);
  // console.log(mixCnt);
  return (mixCnt);
};

solution([12,10,9,3,2,1], 7);