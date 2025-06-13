/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    const numLen = nums.length;
    for(let i = 0; i <numLen; i++){
        for(let j = i + 1; j <= i + indexDiff && j < numLen; j++) {
            if(Math.abs(nums[i] - nums[j]) <= valueDiff){
                return true;
            } 
        }
    } 
    return false;
};
