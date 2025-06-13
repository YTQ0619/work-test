/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // Step 1: 建图，使用邻接表表示
    const graph = Array.from({ length: numCourses }, () => []);
    // Step 2: 统计入度
    const inDegree = new Array(numCourses).fill(0);

    // 构建图和入度数组
    for (const [a, b] of prerequisites) {
        graph[b].push(a); // 从 b 到 a 的有向边
        inDegree[a]++;    // a 的入度加 1
    }

    // Step 3: 广度优先搜索（BFS）进行拓扑排序
    const queue = [];
    // 将入度为 0 的节点加入队列
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    const result = []; // 存储拓扑排序的结果

    while (queue.length > 0) {
        const course = queue.shift(); // 取出队首课程
        result.push(course); // 将课程加入结果数组

        // 更新该课程的所有后续课程的入度
        for (const nextCourse of graph[course]) {
            inDegree[nextCourse]--;
            if (inDegree[nextCourse] === 0) {
                queue.push(nextCourse); // 入度为 0 的课程加入队列
            }
        }
    }

    // 如果处理的课程数等于总课程数，说明可以完成所有课程，返回结果
    // 否则返回空数组
    return result.length === numCourses ? result : [];

// 测试用例
console.log(findOrder(2, [[1, 0]])); // 输出：[0, 1]
console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]])); // 输出：[0, 1, 2, 3] 或 [0, 2, 1, 3]
console.log(findOrder(2, [[1, 0], [0, 1]])); // 输出：[]
};