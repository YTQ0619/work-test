/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let ans = 0;           // 记录最大利润
    let minPrice = prices[0]; // 记录最低买入价格

    for (const p of prices) {
        ans = Math.max(ans, p - minPrice); // 尝试在 p 处卖出，计算最大利润
        minPrice = Math.min(minPrice, p);  // 更新最低买入价格
    }

    return ans; // 返回最大利润
};

