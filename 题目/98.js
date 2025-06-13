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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let prev = null
    function inorderTraversal(root) {
        if(!root) return true
        
        // 1. 先递归遍历左子树，只有左子树整体都满足二叉搜索树特性，左子树遍历的结果才会是true
        let leftRes = inorderTraversal(root.left)
        if(!leftRes) return false

        // 2. 比较当前节点值和前一个节点值（prev），因为二叉搜索树中序遍历是升序的，所以当前节点值应该大于前一个节点值
        if(prev !== null && root.val <= prev.val) return false

        // 3. 如果当前节点通过了上述验证，更新prev的值为当前节点的值，为下一次比较做准备
        prev = root

        // 4. 再递归遍历右子树，并返回右子树遍历的结果，右子树也要满足二叉搜索树特性整个树才是二叉搜索树
        if(!inorderTraversal(root.right)) return false

        // 把false的情况都先列出来，能走到最后就是老大！
        return true
    }

    return inorderTraversal(root)
};
