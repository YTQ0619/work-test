/**
 * @param {number} n
 * @return {number}
 */
function nthUglyNumber(n) {
    // 边界检查
    if (n <= 0) return -1; // 如果 n <= 0，返回错误值（可选）

    // 初始化丑数数组，第一个丑数是 1
    const ugly = new Array(n).fill(1);

    // 三个指针分别对应乘以 2、3、5 的丑数索引
    let i2 = 0, i3 = 0, i5 = 0;

    // 填充丑数数组
    for (let i = 1; i < n; i++) {
        // 计算下一个丑数
        const next2 = ugly[i2] * 2;
        const next3 = ugly[i3] * 3;
        const next5 = ugly[i5] * 5;

        // 选择最小的丑数
        const nextUgly = Math.min(next2, next3, next5);
        ugly[i] = nextUgly;

        // 更新指针（注意：多个指针可以同时更新）
        if (nextUgly === next2) i2++;
        if (nextUgly === next3) i3++;
        if (nextUgly === next5) i5++;
    }

    // 返回第 n 个丑数
    return ugly[n - 1];
}