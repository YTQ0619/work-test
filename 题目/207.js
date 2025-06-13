/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
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

    let count = 0; // 记录处理的课程数

    while (queue.length > 0) {
        const course = queue.shift(); // 取出队首课程
        count++; // 处理的课程数加 1

        // 更新该课程的所有后续课程的入度
        for (const nextCourse of graph[course]) {
            inDegree[nextCourse]--;
            if (inDegree[nextCourse] === 0) {
                queue.push(nextCourse); // 入度为 0 的课程加入队列
            }
        }
    }

    // 如果处理的课程数等于总课程数，说明可以完成所有课程
    return count === numCourses;

// 测试用例
console.log(canFinish(2, [[1, 0]])); // true
console.log(canFinish(2, [[1, 0], [0, 1]])); // false
console.log(canFinish(3, [[0, 1], [0, 2], [1, 2]])); // true
console.log(canFinish(4, [[0, 1], [1, 2], [2, 3], [3, 0]])); // false 
};