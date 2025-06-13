/**
 * @param {number[]} nums
 * @return {number[]}
 */
function Bit (size) {
    this.tree = new Array(size + 1).fill(0)
};

Bit.prototype.lowbit = function (x) {
    return x & -x
}

Bit.prototype.add = function (index, num) {
    while (index && index < this.tree.length) {
        this.tree[index] += num
        index += this.lowbit(index)
    }
}

Bit.prototype.query = function (num) {
    let ans = 0
    while (num) {
        ans += this.tree[num]
        num -= this.lowbit(num)
    }
    return ans
}

var countSmaller = function(nums) {
    const bit = new Bit(20001)
    const ans = []
    for (let i = nums.length - 1; i >= 0; i --) {
        const num = nums[i]
        const pos = num + 10001
        bit.add(pos, 1)
        ans.push(bit.query(pos - 1))
    }
    return ans.reverse()
};