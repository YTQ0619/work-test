var getPermutation = function (n, k) {
    if (n == 1) return "1"
    let nums = []
    let ret = ""
    let dp = []
    dp[0]=0
    dp[1]=1
    for (i = 0; i < n; i++) {
        nums[i] = i + 1;  //初始化值
    }
    for(let i=2;i<=n;i++){ //动归固定阶乘结果
        dp[i]=dp[i-1]*i
    }
    let len=nums.length
    for (i = 0; i < n - 1; i++) {
        let num =dp[len - 1]//一个小数的顺序排列
        let loop = num *len//一组数组循环一遍的总数
        let rest = (k - 1) % loop;//k在第一组数组个位置
        let index = Math.floor(rest / num);
        ret += nums[index]
        nums.splice(index, 1)
        len--
    }
    return ret + nums[0]

};


