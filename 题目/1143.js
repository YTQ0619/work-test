/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length;
    const n = text2.length;

    // 创建一个 (m+1) x (n+1) 的二维数组，并全部初始化为0
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // 遍历两个字符串
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // 如果字符相同，最长公共子序列长度加1
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // 如果不同，取上方或左方的最大值
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // 返回最终结果
    return dp[m][n];
};

