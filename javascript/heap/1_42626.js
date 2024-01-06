// 더 맵게
// https://school.programmers.co.kr/learn/courses/30/lessons/42626
class MinHeap {
	constructor() {
		this.heap = [null];
	}

	getHeapSize() {
		return this.heap.length;
	}

	getHeapRoot() {
		return this.heap[1];
	}

	heapPush(element) {
		this.heap.push(element);
		let elementIdx = this.heap.length - 1;
		let parentIdx = Math.floor(elementIdx / 2);

		while (parentIdx > 0 && this.heap[parentIdx] > this.heap[elementIdx]) {
			[this.heap[parentIdx], this.heap[elementIdx]] = [this.heap[elementIdx], this.heap[parentIdx]];
			elementIdx = parentIdx;
			parentIdx = Math.floor(elementIdx / 2);
		}
	}

	heapPop() {
		const root = this.heap[1];
		this.heap[1] = this.heap.pop();
		
		let currentIdx = 1;
		let [left, right] = [2*currentIdx, 2*currentIdx + 1];
		let currentChildIdx = this.heap[right] && this.heap[right] < this.heap[left] ? right : left;
	
		while (this.heap[currentChildIdx] && this.heap[currentIdx] > this.heap[currentChildIdx]) {
			[this.heap[currentChildIdx], this.heap[currentIdx]] = [this.heap[currentIdx], this.heap[currentChildIdx]];
			currentIdx = currentChildIdx;
			[left, right] = [2*currentIdx, 2*currentIdx + 1];
			currentChildIdx = this.heap[right] && this.heap[right] < this.heap[left] ? right : left;
		}
		
		return root;
	}	
}

function solution(scoville, K) {
	const scovilleHeap = new MinHeap();
	let mixCnt = 0;

	for (const element of scoville)
		scovilleHeap.heapPush(element);

	while (scovilleHeap.getHeapSize() > 2 && scovilleHeap.getHeapRoot() < K) {
		const firstFood = scovilleHeap.heapPop();
		const secondFood = scovilleHeap.heapPop();
		const mixedFood = firstFood + (secondFood * 2);

		scovilleHeap.heapPush(mixedFood);
		mixCnt++;
	}

	return (scovilleHeap.getHeapRoot() >= K ? mixCnt : -1);
}