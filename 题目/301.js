/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    const ans = new Set(), path = [];
    const n = s.length;
    let l = 0, r = 0;
    for(let i=0;i<n;i++){
        if(s.charAt(i) == '(')
            l++;
        else if(s.charAt(i) == ')')
            if(l > 0)
                l--;
            else
                r++;
    }
    const res = n - l - r;

    const dfs = (idx, l) => {
        if(l < 0 || n - idx + path.length < res)
            return;
        if(idx == n){
            if(l==0 && path.length == res)
                ans.add(path.join(""))
            return;
        }
        
        path.push(s.charAt(idx));
        dfs(idx+1, l + (s.charAt(idx) == '(') - (s.charAt(idx) == ')'));
        path.pop();
        dfs(idx+1, l);
    }
    dfs(0, 0)
    return [...ans];
};
