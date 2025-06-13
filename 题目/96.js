/**
 * @param {number} n
 * @return {number}
 */
const numTrees = (n) => {
  const memo = new Array(n + 1);

  const recur = (n) => {
    if (n == 0 || n == 1) {
      return 1;
    }
    if (memo[n]) {
      return memo[n];
    }
    let count = 0;
    for (let i = 0; i <= n - 1; i++) {
      count += recur(i) * recur(n - 1 - i);
    }
    memo[n] = count;
    return count;
  };

  return recur(n);
};
