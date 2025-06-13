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
const isSymmetric = (root) => {
  
    const check = (left, right) => {
        if (left == null && right == null) { // 两个子树都为null，是对称的
           return true;
        }
        if (left && right) { // 两个子树都存在，则需要：root值相同，且他们的子树也满足镜像
            return left.val == right.val && check(left.left, right.right) && check(left.right, right.left);
        }
        return false;        // 一个子树存在一个不存在，肯定不对称
    };

    if (root == null) {     // 如果传入的root就是null，对称
        return true;
    }           
    return check(root.left, root.right); // 否则，判断它的左右子树是否满足对称
};
