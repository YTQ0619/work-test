/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    // 1. 统计每个元素的频率
    const freqMap = new Map();
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // 2. 构建频率桶
    const bucket = Array(nums.length + 1).fill([]);
    for (const [num, freq] of freqMap.entries()) {
        bucket[freq].push(num);
    }

    // 3. 从后往前收集前 k 个高频元素
    const result = [];
    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        if (bucket[i].length > 0) {
            result.push(...bucket[i]);
        }
    }

    return result.slice(0, k); // 确保返回结果长度为 k
};