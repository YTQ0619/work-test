/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    // Step 1: 建图，使用邻接表表示
    const graph = new Map();

    // 构建图
    for (let i = 0; i < equations.length; i++) {
        const [Ai, Bi] = equations[i];
        const value = values[i];

        // 添加从 Ai 到 Bi 的边
        if (!graph.has(Ai)) {
            graph.set(Ai, new Map());
        }
        graph.get(Ai).set(Bi, value);

        // 添加从 Bi 到 Ai 的边
        if (!graph.has(Bi)) {
            graph.set(Bi, new Map());
        }
        graph.get(Bi).set(Ai, 1 / value);
    }

    // Step 2: 深度优先搜索（DFS）计算查询结果
    function dfs(start, end, visited) {
        // 如果起点或终点不在图中，返回 -1.0
        if (!graph.has(start) || !graph.has(end)) {
            return -1.0;
        }

        // 如果起点和终点相同，返回 1.0
        if (start === end) {
            return 1.0;
        }

        // 避免重复访问
        visited.add(start);

        // 遍历起点的邻居
        for (const [neighbor, weight] of graph.get(start)) {
            if (!visited.has(neighbor)) {
                const result = dfs(neighbor, end, visited);
                if (result !== -1.0) {
                    return weight * result;
                }
            }
        }

        // 如果无法找到路径，返回 -1.0
        return -1.0;
    }

    // Step 3: 处理查询
    const results = [];
    for (const [Cj, Dj] of queries) {
        results.push(dfs(Cj, Dj, new Set()));
    }

    return results;

// 测试用例
console.log(
    calcEquation(
        [["a", "b"], ["b", "c"]],
        [2.0, 3.0],
        [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]
    )
); // 输出：[6.0, 0.5, -1.0, 1.0, -1.0]
};