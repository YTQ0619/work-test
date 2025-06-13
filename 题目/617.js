var mergeTrees = function(root1, root2) {
    if (root1 === null) return root2;
    if (root2 === null) return root1;
    return new TreeNode(root1.val + root2.val,
        mergeTrees(root1.left, root2.left),    // 合并左子树
        mergeTrees(root1.right, root2.right)); // 合并右子树
};
