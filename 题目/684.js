/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const n = edges.length; // 节点数等于边数加 1
    const parent = new Array(n + 1).fill(0); // 并查集的父节点数组

    // 初始化并查集，每个节点的父节点初始化为自身
    for (let i = 1; i <= n; i++) {
        parent[i] = i;
    }

    // 并查集的查找操作（路径压缩）
    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]); // 路径压缩
        }
        return parent[x];
    }

    // 并查集的合并操作
    function union(a, b) {
        const rootA = find(a);
        const rootB = find(b);
        if (rootA === rootB) {
            return true; // 已经在同一集合中，说明有环
        }
        parent[rootA] = rootB; // 合并两个集合
        return false;
    }

    // 遍历每条边，尝试合并节点
    for (const [a, b] of edges) {
        if (union(a, b)) {
            return [a, b]; // 如果发现环，返回这条边
        }
    }

    // 如果没有找到冗余边（理论上不会发生）
    return [];
};

// 测试用例
console.log(findRedundantConnection([[1, 2], [1, 3], [2, 3]])); // 输出：[2, 3]
console.log(findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]])); // 输出：[1, 4]