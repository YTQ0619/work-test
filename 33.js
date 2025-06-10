/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 153. 寻找旋转排序数组中的最小值（返回的是下标）
var findMin = function(nums) {
    let left = -1, right = nums.length - 1; // 开区间 (-1, n-1)
    while (left + 1 < right) { // 开区间不为空
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < nums[nums.length - 1]) {
            right = mid;
        } else {
            left = mid;
        }
    }
    return right;
};

// 有序数组中找 target 的下标
var lowerBound = function(nums, left, right, target) {
    while (left + 1 < right) { // 开区间不为空
        // 循环不变量：
        // nums[right] >= target
        // nums[left] < target
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] >= target) {
            right = mid; // 范围缩小到 (left, mid)
        } else {
            left = mid; // 范围缩小到 (mid, right)
        }
    }
    return nums[right] === target ? right : -1;
};

var search = function(nums, target) {
    const i = findMin(nums);
    if (target > nums[nums.length - 1]) { // target 在第一段
        return lowerBound(nums, -1, i, target); // 开区间 (-1, i)
    }
    // target 在第二段
    return lowerBound(nums, i - 1, nums.length, target); // 开区间 (i-1, n)
};

