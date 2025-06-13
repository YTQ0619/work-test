/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    function findKthLargest(nums, k) {
        if (!nums || nums.length === 0 || k < 1 || k > nums.length) {
            throw new Error("Invalid input");
        }

        function partition(left, right) {
            const pivot = nums[right]; // 以最右边为 pivot
            let i = left; // i 是第一个大于等于 pivot 的位置

            for (let j = left; j < right; j++) {
                if (nums[j] >= pivot) {
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                    i++;
                }
            }

            [nums[i], nums[right]] = [nums[right], nums[i]]; // 把 pivot 放到中间
            return i;
        }

        function quickSelect(left, right, targetIndex) {
            while (left <= right) {
                const pivotIndex = partition(left, right);

                if (pivotIndex === targetIndex) {
                    return nums[pivotIndex];
                } else if (pivotIndex < targetIndex) {
                    left = pivotIndex + 1;
                } else {
                    right = pivotIndex - 1;
                }
            }
            return nums[left]; // 理论上不会走到这里
        }

        const n = nums.length;
        const targetIndex = n - k;
        return quickSelect(0, n - 1, targetIndex);
    }

    // 测试用例 1
    console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // 输出: 5

    // 测试用例 2
    console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 输出: 4
};