var sortedArrayToBST = function(nums) {
    // 把 nums[left] 到 nums[right-1] 转成平衡二叉搜索树
    function dfs(left, right) {
        if (left === right) {
            return null;
        }
        const m = Math.floor((left + right) / 2);
        return new TreeNode(nums[m], dfs(left, m), dfs(m + 1, right));
    }
    return dfs(0, nums.length);
};