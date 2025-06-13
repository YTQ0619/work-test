/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    // Step 1: 建图，使用邻接表表示
    const graph = Array.from({ length: n + 1 }, () => []); // 邻接表，索引从 1 开始
    for (const [u, v, w] of times) {
        graph[u].push([v, w]); // 从 u 到 v 的边，权重为 w
    }

    // Step 2: Dijkstra 算法
    const dist = new Array(n + 1).fill(Infinity); // 距离数组，初始化为无穷大
    dist[k] = 0; // 起点到自身的距离为 0

    // 使用优先队列（最小堆）优化 Dijkstra
    const pq = [[0, k]]; // [距离, 节点]

    while (pq.length > 0) {
        const [currentDist, current] = pq.shift(); // 取出当前距离最小的节点

        // 如果当前节点的距离比记录的更大，说明已经处理过，跳过
        if (currentDist > dist[current]) {
            continue;
        }

        // 遍历当前节点的邻居
        for (const [neighbor, weight] of graph[current]) {
            const newDist = currentDist + weight; // 更新到邻居的距离
            if (newDist < dist[neighbor]) {
                dist[neighbor] = newDist; // 更新距离
                pq.push([newDist, neighbor]); // 将邻居加入优先队列
                // 对优先队列进行排序，确保队首是距离最小的节点
                pq.sort((a, b) => a[0] - b[0]);
            }
        }
    }

    // Step 3: 检查是否所有节点都能接收到信号
    let maxTime = Math.max(...dist.slice(1)); // 忽略 dist[0]，因为节点编号从 1 开始
    return maxTime === Infinity ? -1 : maxTime; // 如果有节点无法到达，返回 -1


// 测试用例
console.log(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2)); // 输出：2
console.log(networkDelayTime([[1, 2, 1]], 2, 1)); // 输出：1
console.log(networkDelayTime([[1, 2, 1]], 2, 2)); // 输出：-1
};