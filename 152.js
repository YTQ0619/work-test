/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const n = nums.length;
    const fMax = new Array(n);
    const fMin = new Array(n);
    fMax[0] = fMin[0] = nums[0];
    for (let i = 1; i < n; i++) {
        const x = nums[i];
        // 把 x 加到右端点为 i-1 的（乘积最大/最小）子数组后面，
        // 或者单独组成一个子数组，只有 x 一个元素
        fMax[i] = Math.max(fMax[i - 1] * x, fMin[i - 1] * x, x);
        fMin[i] = Math.min(fMax[i - 1] * x, fMin[i - 1] * x, x);
    }
    return Math.max(...fMax);
};

