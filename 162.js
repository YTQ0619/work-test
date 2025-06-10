/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0, right = nums.length - 1;
    
    // 使用二分查找法查找峰值
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);  // 计算中间位置
        // 如果 mid 位置的值大于右边的值，说明峰值在左半部分（包含 mid）
        if (nums[mid] > nums[mid + 1]) {
            right = mid;  // 调整右边界
        } else {
            left = mid + 1;  // 否则，峰值在右半部分
        }
    }
    
    // 最终 left 会指向一个峰值位置
    return left;
};
