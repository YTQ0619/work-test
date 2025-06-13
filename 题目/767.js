/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    const countMap = new Map();
    let maxCount = 0;
    let maxChar = '';

    // 统计字符频率
    for (const char of s) {
        countMap.set(char, (countMap.get(char) || 0) + 1);
        if (countMap.get(char) > maxCount) {
            maxCount = countMap.get(char);
            maxChar = char;
        }
    }

    // 如果最大频率超过一半，无法重构
    if (maxCount > Math.floor((s.length + 1) / 2)) return "";

    // 构建优先队列（大根堆）
    const maxHeap = [];
    countMap.forEach((count, char) => {
        maxHeap.push({ char, count });
    });
    maxHeap.sort((a, b) => b.count - a.count);

    let result = '';
    while (maxHeap.length > 1) {
        const first = maxHeap.shift();
        const second = maxHeap.shift();

        result += first.char + second.char;

        if (--first.count > 0) maxHeap.push(first);
        if (--second.count > 0) maxHeap.push(second);

        maxHeap.sort((a, b) => b.count - a.count);
    }

    if (maxHeap.length > 0) {
        result += maxHeap[0].char;
    }

    return result;
};