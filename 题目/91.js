/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const n = s.length;
    if (n === 0 || s[0] === '0') return 0; // 开头不能为0

    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // 空串的解码方式为1
    dp[1] = 1; // 非0开头的字符串，长度为1时解码方式为1

    for (let i = 2; i <= n; i++) {
        const oneDigit = s[i - 1];         // 当前一位（字符）
        const twoDigits = s.slice(i - 2, i); // 当前两位（字符串）

        // 如果当前一位不是 '0'，可以单独解码，加上前一个状态
        if (oneDigit !== '0') {
            dp[i] += dp[i - 1];
        }

        // 如果两位组合在10到26之间，也可以解码，加上前前个状态
        if (twoDigits >= '10' && twoDigits <= '26') {
            dp[i] += dp[i - 2];
        }
    }

    return dp[n]; // dp[n] 表示整个字符串的解码总数
};

