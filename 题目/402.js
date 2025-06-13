/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */

var removeKdigits = function(num, k) {
    const stack = [];
    
    for (const digit of num) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    // 如果还有剩余的 k，直接从末尾移除
    while (k > 0) {
        stack.pop();
        k--;
    }

    // 去掉前导零
    let result = stack.join('');
    result = result.replace(/^0+/, '');

    return result === '' ? '0' : result;
};
