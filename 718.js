/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findLength = (A, B) => {
  const m = A.length;
  const n = B.length;
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (A[i] == B[j]) { // 遇到相同项
        let subLen = 1;   // 公共子序列长度至少为1
        while (i + subLen < m && j + subLen < n && A[i + subLen] == B[j + subLen]) { //新的一项也相同
          subLen++; // 公共子序列长度每次增加 1，考察新的一项
        }
        res = Math.max(subLen, res);
      }
    }
  }
  return res;
};
