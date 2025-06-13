/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  const len1 = num1.length,
    len2 = num2.length;
  let nums = new Array(len1 + len2).fill(0);
  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      const sum = +num1.charAt(i) * +num2.charAt(j) + nums[i + j + 1];
      nums[i + j + 1] = sum % 10;
      nums[i + j] += Math.floor(sum / 10);
    }
  }
  let flag = false,
    res = "";
  for (let num of nums) {
    if (!flag) flag = !!num;
    if (flag) res += num;
  }
  return res ? res : "0";
};
