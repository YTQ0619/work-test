/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let maxLen = 0
    let j = 0
    for (let i = 0; i < nums.length;i++ ) {
        if (nums[i] == 0) {
            k--
        }
        while (k < 0) {
            if (nums[j] == 0) {
                k++
            }
            j++
        }
         if (i-j+1 > maxLen) {
            maxLen = i-j+1
        }
    }
    return maxLen;
};
