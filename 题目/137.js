/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce(([a, b], x) => [a & ~b & ~x | ~a & b & x, ~a & (b ^ x)], [0, 0])[1];
};

