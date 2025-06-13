/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const n = graph.length; // 节点总数
    const colors = new Array(n).fill(-1); // 染色数组，初始值为 -1 表示未染色

    // 广度优先搜索（BFS）
    function bfs(start) {
        const queue = [start];
        colors[start] = 0; // 将起始节点染色为 0

        while (queue.length > 0) {
            const node = queue.shift(); // 取出队首节点
            const color = colors[node]; // 当前节点的颜色

            // 遍历当前节点的所有邻居
            for (const neighbor of graph[node]) {
                if (colors[neighbor] === -1) {
                    // 如果邻居未染色，染成与当前节点不同的颜色
                    colors[neighbor] = 1 - color;
                    queue.push(neighbor);
                } else if (colors[neighbor] === color) {
                    // 如果邻居已经被染成相同的颜色，说明不是二分图
                    return false;
                }
            }
        }

        return true;
    }

    // 遍历所有节点，确保每个连通分量都被检查
    for (let i = 0; i < n; i++) {
        if (colors[i] === -1) {
            // 如果节点未染色，从该节点开始 BFS
            if (!bfs(i)) {
                return false; // 如果发现不是二分图，直接返回 false
            }
        }
    }

    return true; // 所有节点都成功染色，是二分图

// 测试用例
console.log(isBipartite([[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]])); // 输出：false
console.log(isBipartite([[1, 3], [0, 2], [1, 3], [0, 2]])); // 输出：true
};