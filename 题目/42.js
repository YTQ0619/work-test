var trap = function(height) {
    let l_max = 0, r_max = 0, ans = 0;
    for (let i = 0; i < height.length; i++) {
        l_max = Math.max(l_max, height[i]);
        r_max = Math.max(r_max, height[height.length - i - 1]);
        ans += l_max + r_max - height[i];
    }
    return ans - l_max * height.length;
};


