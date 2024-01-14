// 이중우선순위큐
// https://school.programmers.co.kr/learn/courses/30/lessons/42628
function solution(operations) {
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
			
			if (this.getHeapSize() > 2) {
				this.heap[1] = this.heap.pop();
		
				let currentIdx = 1;
				let [leftChild, rightChild] = [currentIdx * 2, currentIdx * 2 + 1];
				let currentChildIdx = this.heap[rightChild] && this.heap[rightChild] < this.heap[leftChild] ? rightChild : leftChild;
			
				while (this.heap[currentChildIdx] && this.heap[currentIdx] > this.heap[currentChildIdx]) {
					[this.heap[currentChildIdx], this.heap[currentIdx]] = [this.heap[currentIdx], this.heap[currentChildIdx]];
					currentIdx = currentChildIdx;
					[leftChild, rightChild] = [currentIdx * 2, currentIdx * 2 + 1];
					currentChildIdx = this.heap[rightChild] && this.heap[rightChild] < this.heap[leftChild] ? rightChild : leftChild;
				}
			} else {
				this.heap.pop();
			}
			
			return root;
		}	
	}
}