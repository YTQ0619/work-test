// 最小堆类（默认或自定义比较器）
class MinHeap {
    constructor(comparator = (a, b) => a < b) {
        this.heap = [];
        this.comparator = comparator;
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.size() === 0) return null;
        const top = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.sinkDown(0);
        }
        return top;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.comparator(this.heap[index], this.heap[parentIndex])) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                index = parentIndex;
            } else break;
        }
    }

    sinkDown(index) {
        const len = this.heap.length;
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let swap = index;

            if (left < len && this.comparator(this.heap[left], this.heap[swap])) {
                swap = left;
            }

            if (right < len && this.comparator(this.heap[right], this.heap[swap])) {
                swap = right;
            }

            if (swap !== index) {
                [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
                index = swap;
            } else break;
        }
    }
}

// 最大堆类（复用 MinHeap，反向比较即可）
class MaxHeap extends MinHeap {
    constructor(comparator = (a, b) => a > b) {
        super(comparator);
    }
}
var MedianFinder = function () {
    // 初始化两个堆
    this.maxHeap = new MaxHeap(); // 存储较小的一半元素
    this.minHeap = new MinHeap(); // 存储较大的一半元素
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    // 先加入最大堆，再平衡
    this.maxHeap.push(num);
    this.minHeap.push(this.maxHeap.pop());

    // 保持 maxHeap 的 size >= minHeap.size
    if (this.maxHeap.size() < this.minHeap.size()) {
        this.maxHeap.push(this.minHeap.pop());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if ((this.maxHeap.size() + this.minHeap.size()) % 2 === 1) {
        // 奇数个元素，中位数是最大堆堆顶
        return this.maxHeap.peek();
    } else {
        // 偶数个元素，中位数是两堆顶的平均值
        return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    }

    // 最小堆类（默认或自定义比较器）
    class MinHeap {
        constructor(comparator = (a, b) => a < b) {
            this.heap = [];
            this.comparator = comparator;
        }

        push(val) {
            this.heap.push(val);
            this.bubbleUp(this.heap.length - 1);
        }

        pop() {
            if (this.size() === 0) return null;
            const top = this.heap[0];
            const last = this.heap.pop();
            if (this.heap.length > 0) {
                this.heap[0] = last;
                this.sinkDown(0);
            }
            return top;
        }

        peek() {
            return this.heap[0];
        }

        size() {
            return this.heap.length;
        }

        isEmpty() {
            return this.heap.length === 0;
        }

        bubbleUp(index) {
            while (index > 0) {
                const parentIndex = Math.floor((index - 1) / 2);
                if (this.comparator(this.heap[index], this.heap[parentIndex])) {
                    [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
                    index = parentIndex;
                } else break;
            }
        }

        sinkDown(index) {
            const len = this.heap.length;
            while (true) {
                let left = 2 * index + 1;
                let right = 2 * index + 2;
                let swap = index;

                if (left < len && this.comparator(this.heap[left], this.heap[swap])) {
                    swap = left;
                }

                if (right < len && this.comparator(this.heap[right], this.heap[swap])) {
                    swap = right;
                }

                if (swap !== index) {
                    [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
                    index = swap;
                } else break;
            }
        }
    }

    // 最大堆类（复用 MinHeap，反向比较即可）
    class MaxHeap extends MinHeap {
        constructor(comparator = (a, b) => a > b) {
            super(comparator);
        }
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */