/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    if(n == 1)
        return [0, 1]
    const res = grayCode(n - 1), add = 1 << (n - 1)
    for(let i=res.length-1;i>=0;i--)
        res.push(res[i] + add)
    return res
};
