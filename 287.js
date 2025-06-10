/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let fast = 0, slow = 0;

    // 快慢指针寻找相遇点
    while (true) {
        fast = nums[nums[fast]];  // 快指针一次走两步
        slow = nums[slow];        // 慢指针一次走一步
        if (fast === slow) break; // 相遇了，退出循环
    }

    let finder = 0;

    // 找到重复的数字
    while (true) {
        finder = nums[finder];  // 找到起始位置的数字
        slow = nums[slow];      // 慢指针继续前进
        if (slow === finder) break; // 找到重复的数字，退出循环
    }

    return slow; // 返回重复的数字
};
