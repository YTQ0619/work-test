/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
  let len = nums.length,
    sumList = Array(len + 1).fill(0),
    dp = Array.from({ length: len + 1 }, () => Array(m + 1).fill(Number.MAX_VALUE));

  // 逐位增加，反面后面根据区间求区间和
  for (let i = 0; i < len; i++) {
    sumList[i + 1] = sumList[i] + nums[i];
  }

  // 默认值
  dp[0][0] = 0;

  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= Math.min(m, i); j++) {
      // 前i个数分成j段
      for (let x = j - 1; x < i; x++) {
        // x最后一段的起点
        // perv本轮分割完成 分段中最大的和
        let prev = Math.max(dp[x][j - 1], sumList[i] - sumList[x])
        // 该分割情况下最大分段和的最小值
        dp[i][j] = Math.min(prev, dp[i][j])
      }
    }
  }

  return dp[len][m]
};
