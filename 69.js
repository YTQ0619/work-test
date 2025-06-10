/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 0, r = x, ans = -1;
    
    // 使用二分查找，查找平方根
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);  // 计算中间位置
        
        if (mid * mid <= x) {
            ans = mid;  // 记录当前可能的平方根
            l = mid + 1;  // 搜索右半边，寻找更大的平方根
        } else {
            r = mid - 1;  // 搜索左半边，mid 太大
        }
    }
    
    return ans;  // 返回最终找到的最大平方根
};
