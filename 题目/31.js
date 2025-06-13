/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const n = nums.length;

    // 第一步：从右向左找到第一个小于右侧相邻数字的数 nums[i]
    let i = n - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // 如果找到了，进入第二步；否则跳过第二步，反转整个数组
    if (i >= 0) {
        // 第二步：从右向左找到 nums[i] 右边最小的大于 nums[i] 的数 nums[j]
        let j = n - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        // 交换 nums[i] 和 nums[j]
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // 第三步：反转 nums[i+1:]（如果上面跳过第二步，此时 i = -1）
    let left = i + 1, right = n - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};
