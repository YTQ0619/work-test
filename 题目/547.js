/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length; // 城市总数
    const visited = new Array(n).fill(false); // 标记每个城市是否被访问过
    let provinces = 0; // 记录省份数量

    // 深度优先搜索（DFS）函数
    function dfs(city) {
        visited[city] = true; // 标记当前城市为已访问
        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (isConnected[city][neighbor] === 1 && !visited[neighbor]) {
                dfs(neighbor); // 递归访问邻居城市
            }
        }
    }

    // 遍历所有城市，寻找连通分量
    for (let i = 0; i < n; i++) {
        if (!visited[i]) { // 如果城市 i 未被访问
            dfs(i); // 从城市 i 开始 DFS，找到一个连通分量
            provinces++; // 找到一个连通分量，省份数量加 1
        }
    }

    return provinces;

// 测试用例
console.log(findCircleNum([[1, 1, 0], [1, 1, 0], [0, 0, 1]])); // 输出：2
console.log(findCircleNum([[1, 0, 0], [0, 1, 0], [0, 0, 1]])); // 输出：3
console.log(findCircleNum([[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]])); // 输出：1
};