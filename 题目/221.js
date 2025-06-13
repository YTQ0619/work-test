/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {

    const rows = matrix.length;
    const cols = matrix[0].length;

    // 初始化 DP 数组（多一行一列方便处理边界）
    const dp = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));

    let maxSide = 0; // 记录最大边长

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // 只有当当前值为 '1' 时，才可能形成正方形
            if (matrix[i][j] === '1') {
                // 状态转移方程，注意下标偏移
                dp[i + 1][j + 1] = Math.min(
                    dp[i][j + 1],   // 上
                    dp[i + 1][j],   // 左
                    dp[i][j]        // 左上
                ) + 1;

                // 更新最大边长
                maxSide = Math.max(maxSide, dp[i + 1][j + 1]);
            }
        }
    }

    // 最大正方形面积 = 边长²
    return maxSide * maxSide;
};
