/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const mapping = { ')': '(', ']': '[', '}': '{' };

    for (const char of s) {
        if (char in mapping) {
            // 如果是右括号，检查栈顶是否匹配
            const topElement = stack.pop();
            if (topElement !== mapping[char]) {
                return false;
            }
        } else {
            // 如果是左括号，入栈
            stack.push(char);
        }
    }

    // 最后栈应该为空
    return stack.length === 0;
};