/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return 0;

    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxArea = 0;

    // 将矩阵转换为高度数组（类似柱状图）
    const heights = new Array(cols).fill(0);

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            heights[j] = matrix[i][j] === '1' ? heights[j] + 1 : 0;
        }

        // 使用单调栈计算当前行的最大矩形面积
        const stack = [];
        for (let j = 0; j <= cols; j++) {
            while (stack.length > 0 && (j === cols || heights[j] < heights[stack[stack.length - 1]])) {
                const height = heights[stack.pop()];
                const width = stack.length > 0 ? j - stack[stack.length - 1] - 1 : j;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(j);
        }
    }

    return maxArea;
};