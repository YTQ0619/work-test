/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    while(root) {
        if(!root.left) {
            root = root.right;
        } else {
            let temp = root.left;
            // 找到左节点的最右树节点
            while(temp.right) temp = temp.right;
            // 将树的右节点接在左节点的最右树节点上
            temp.right = root.right;
            // 右节点替换为左节点
            root.right = root.left;
            // 左节点的值置为null
            root.left = null;
            // 开始下一次遍历
            root = root.right; 
        }
    }
};
