/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const n = nums.length;
  const map = new Map();
  for(let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    if(map.get(num) > n / 2) {
      return num;
    }
  }
};