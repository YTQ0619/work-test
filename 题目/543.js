var diameterOfBinaryTree = function(root) {
    let ans = 0;
    function dfs(node) {
        if (node === null) {
            return -1;
        }
        const lLen = dfs(node.left) + 1; // 左子树最大链长+1
        const rLen = dfs(node.right) + 1; // 右子树最大链长+1
        ans = Math.max(ans, lLen + rLen); // 两条链拼成路径
        return Math.max(lLen, rLen); // 当前子树最大链长
    }
    dfs(root);
    return ans;
};