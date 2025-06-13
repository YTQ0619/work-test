/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // 初始化 dp 数组，默认每个元素的最长递增子序列长度是1
    const dp = new Array(nums.length).fill(1);

    // 用于记录全局的最长子序列长度
    let maxLength = 1;

    // 遍历每一个元素，尝试更新以当前元素结尾的最长子序列长度
    for (let i = 1; i < nums.length; i++) {
        // 遍历i之前的所有元素
        for (let j = 0; j < i; j++) {
            // 如果 nums[j] 小于 nums[i]，说明可以连接
            if (nums[j] < nums[i]) {
                // 更新dp[i]，取当前dp[i]和dp[j] + 1中的较大值
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        // 更新全局最长子序列长度
        maxLength = Math.max(maxLength, dp[i]);
    }

    // 返回最终答案
    return maxLength;
};
