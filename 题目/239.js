/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const n = nums.length;
    const deque = [];
    const result = [];

    for (let i = 0; i < n; i++) {
        // 移除队列中比当前元素小的元素
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }
        deque.push(i);

        // 如果队首元素超出窗口范围，移除
        if (i - deque[0] >= k) {
            deque.shift();
        }

        // 当窗口大小达到 k 时，记录最大值
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};