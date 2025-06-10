/**
 * @param {number[]} coins - 硬币面值数组
 * @param {number} amount - 目标金额
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const n = coins.length;
  // 创建二维dp数组，大小 (n+1) x (amount+1)，初始值Infinity
  const dp = Array.from({ length: n + 1 }, () => Array(amount + 1).fill(Infinity));
  
  // 初始化，凑成金额0需要0个硬币
  for (let i = 0; i <= n; i++) {
    dp[i][0] = 0;
  }

  // 填表，遍历每种硬币
  for (let i = 1; i <= n; i++) {
    const coin = coins[i - 1]; // 第i个硬币的面值
    for (let j = 0; j <= amount; j++) {
      // 不选当前硬币
      dp[i][j] = dp[i - 1][j];
      // 选当前硬币（如果金额够大）
      if (j >= coin) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j - coin] + 1);
      }
    }
  }

  // 返回结果，注意处理无法组成的情况
  return dp[n][amount] === Infinity ? -1 : dp[n][amount];
};
