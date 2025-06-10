/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    const n = nums.length;
    if (n <= 1) return n;

    // dp[i]: 以 nums[i] 结尾的最长递增子序列长度
    const dp = new Array(n).fill(1);
    // count[i]: 以 nums[i] 结尾的最长递增子序列个数
    const count = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            // 如果 nums[i] 可以接在 nums[j] 后面
            if (nums[j] < nums[i]) {
                if (dp[j] + 1 > dp[i]) {
                    // 找到更长的子序列
                    dp[i] = dp[j] + 1;
                    count[i] = count[j]; // 更新个数为 j 的个数
                } else if (dp[j] + 1 === dp[i]) {
                    // 找到相同长度的子序列
                    count[i] += count[j]; // 加上 j 的个数
                }
            }
        }
    }

    // 找出最长递增子序列的长度
    const maxLen = Math.max(...dp);
    let result = 0;

    // 把所有以 maxLen 结尾的子序列的个数加起来
    for (let i = 0; i < n; i++) {
        if (dp[i] === maxLen) {
            result += count[i];
        }
    }

    return result;
};
