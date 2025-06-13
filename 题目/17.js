var letterCombinations = function(digits) {
    if (digits.length == 0) return []
    const nums = digits.split(''), nl = nums.length, res = [], phone = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    // DFS
    const dfs = (r, p) => {
        if (r.length == nums.length) {
            res.push(r)
            return ;
        }
        for (i of phone[nums[p++]]) {
            const t = r
            r += i
            dfs(r, p)
            r = t
        }
    }
    dfs('', 0)
    return res
};
