var maxPathSum = function (root) {
  // 最大路径和 初始化值为数字最小值
  let maxSum = Number.MIN_SAFE_INTEGER;
  /**
   * 函数定义：计算从根节点 root 为起点的最大单边路径和
   */
  const oneSideMax = (root) => {
    // 遍历到null节点，收益0
    if (root == null) return 0;

    // 左子树提供的最大路径和
    const left = oneSideMax(root.left);
    // 右子树提供的最大路径和
    const right = oneSideMax(root.right);

    // 当前子树内部的最大路径和
    const innerMaxSum = left + root.val + right;
    // 挑战最大纪录
    maxSum = Math.max(maxSum, innerMaxSum);

    // 当前子树对外提供的最大和
    const outputMaxSum = root.val + Math.max(left, right);
    // 对外提供的路径和为负，直接返回0。否则正常返回
    return outputMaxSum < 0 ? 0 : outputMaxSum;
    // 也可以写成如下
    return Math.max(0, outputMaxSum);
  };
  oneSideMax(root);
  return maxSum;
};
