/**
 * @param {number} n
 * @return {number}
 */
 // 完全背包
var integerBreak = function(n) {
    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    for(let i = 1; i < n; i++) { // 遍历物品1 ~ n-1
        for(let j = i; j <= n; j++) { // 遍历背包
            dp[j] = Math.max(dp[j], dp[j - i] * i);
        }
    }
    return dp[n];
};

