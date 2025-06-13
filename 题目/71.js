/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];
    const parts = path.split('/').filter(part => part !== '' && part !== '.');

    for (const part of parts) {
        if (part === '..') {
            // 回退到上一级目录（如果栈不为空）
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            // 普通目录名，入栈
            stack.push(part);
        }
    }

    // 构建简化后的路径
    return '/' + stack.join('/');
};