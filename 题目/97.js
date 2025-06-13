const isInterleave = (s1, s2, s3) => {
    if (s1.length + s2.length != s3.length) return false;

    const check = (i, j, k) => { // 检查ijk开始的子串是否满足题目条件
        // k越界，s3扫描完了，返回true
        if (k == s3.length) return true;       

        let isValid = false;                   
        // i指针没有越界，且s1[i]和s3[k]相同
        if (i < s1.length && s1[i] == s3[k]) { 
            isValid = check(i + 1, j, k + 1);    // i、k右移一位，递归考察
        }
        // j 指针没有越界，且s2[i]和s3[k]相同
        if (j < s2.length && s2[j] == s3[k]) { 
            isValid = isValid || check(i, j + 1, k + 1); 
            // 有可能i、j、k指向相同的字符，尝试 i、k 右移，但已经做过了
            // isValid 就是 check(i + 1, j, k + 1) 的结果
            // 如果它为true，就不用执行 j、k 右移的递归，如果是false，执行递归
        }
        return isValid; // 整个遍历过程都没有返回true，则返回默认的false
    };

    return check(0, 0, 0);
};

