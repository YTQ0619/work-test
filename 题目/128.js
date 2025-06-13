/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const map = new Map();
    let res = 0;

    for (let num of nums) {
        // 跳过重复数字
        if (map.has(num)) continue;

        const left = map.get(num - 1) || 0;
        const right = map.get(num + 1) || 0;
        const sum = left + right + 1;

        // 更新当前数字的序列长度
        map.set(num, sum);

        // 更新边界：只有最左和最右边的数字需要更新长度
        map.set(num - left, sum);
        map.set(num + right, sum);

        // 更新最大长度
        res = Math.max(res, sum);
    }

    return res;
};


