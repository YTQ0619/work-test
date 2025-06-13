/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = nums.sort((a, b) => b - a).slice(0, k); // 初始化为最大堆

    // 维护大小为 k 的最小堆
    for (let i = Math.floor(this.nums.length / 2) - 1; i >= 0; i--) {
        this.heapify(i);
    }
};

KthLargest.prototype.add = function(val) {
    if (this.nums.length < this.k) {
        this.nums.push(val);
        this.heapify(Math.floor(this.nums.length / 2) - 1);
    } else if (val > this.nums[0]) {
        this.nums[0] = val;
        this.heapify(0);
    }

    return this.nums[0];
};

KthLargest.prototype.heapify = function(index) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let smallest = index;

    if (left < this.nums.length && this.nums[left] < this.nums[smallest]) {
        smallest = left;
    }
    if (right < this.nums.length && this.nums[right] < this.nums[smallest]) {
        smallest = right;
    }

    if (smallest !== index) {
        [this.nums[index], this.nums[smallest]] = [this.nums[smallest], this.nums[index]];
        this.heapify(smallest);
    }
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */