var moveZeroes = function(nums) {
    let stackSize = 0;
    for (const x of nums) {
        if (x !== 0) {
            nums[stackSize++] = x; // 把 x 入栈
        }
    }
    nums.fill(0, stackSize);
};

