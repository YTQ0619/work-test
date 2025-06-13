var minimumTotal = function(triangle) {
    const n = triangle.length;
    const memo = Array.from({ length: n }, () => Array(n));
    function dfs(i, j) {
        if (i === n - 1) {
            return triangle[i][j];
        }
        if (memo[i][j] !== undefined) { // 之前计算过
            return memo[i][j];
        }
        return memo[i][j] = Math.min(dfs(i + 1, j), dfs(i + 1, j + 1)) + triangle[i][j];
    }
    return dfs(0, 0);
};

