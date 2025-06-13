/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {

    if (!node) return null; // 如果节点为空，直接返回 null

    const visited = new Map(); // 存储原节点到克隆节点的映射

    // 深度优先搜索（DFS）辅助函数
    function dfs(originalNode) {
        if (visited.has(originalNode)) {
            return visited.get(originalNode); // 如果已经克隆过，直接返回克隆节点
        }

        // 创建新的克隆节点
        const cloneNode = new Node(originalNode.val, []);
        visited.set(originalNode, cloneNode); // 将原节点映射到克隆节点

        // 递归克隆邻居节点
        for (const neighbor of originalNode.neighbors) {
            cloneNode.neighbors.push(dfs(neighbor)); // 递归克隆邻居并添加到克隆节点的邻居列表
        }

        return cloneNode; // 返回克隆节点
    }

    return dfs(node); // 从给定节点开始克隆}

// 测试用例
// 构造测试用例的图
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

// 克隆图
const clonedGraph = cloneGraph(node1);

// 打印克隆图的结构
console.log(clonedGraph.val); // 输出：1
console.log(clonedGraph.neighbors.map(node => node.val)); // 输出：[2, 4]
};