/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function (root) {
    let queue = [root];
    // 遍历完所有非空节点时变成 true
    let end = false;
    // while 循环控制从上向下一层层遍历
    while (queue.length) {
      let size = queue.length;
      // for 循环控制每一层从左向右遍历
      for (let i = 0; i < size; i++) {
        let cur = queue.shift();
        if (cur == null) {
          // 第一次遇到 null 时 end 变成 true，如果之后的所有节点都是 null，则说明是完全二叉树
          end = true;
        } else {
          // end 为 true 时遇到非空节点说明不是完全二叉树
          if (end) return false;
          // 将下一层节点放入队列，不用判断是否非空
          queue.push(cur.left);
          queue.push(cur.right);
        }
      }
    }
    return true;
  };
  
  