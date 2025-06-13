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
 * @return {number[]}
 */
var rightSideView = function(root, k = 0, res = []) {
    if(!root) {
        return res;
    }
    // 如果为空说明之前没遍历到过，这是这一层的遍历的第一个节点
    // 由于遍历顺序做了反向操作，这里是最右边的节点。
    if(!res[k]) {
        res[k] = root.val;
    }
    // 反向操作，先遍历右子树
    rightSideView(root.right, k + 1, res);
    rightSideView(root.left, k + 1, res);
    return res;
};
