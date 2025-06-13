/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0) {
        return null;
    }
    if (inorder.length === 1) {
        return new TreeNode(inorder[0])
    }
    const val = postorder.pop();
    const node = new TreeNode(val);
    const indexV = inorder.indexOf(val);
    node.left = buildTree(inorder.splice(0, indexV), postorder.splice(0, indexV))
    node.right = buildTree(inorder.splice(1), postorder)
    return node;
};
