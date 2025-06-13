/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 
 var minWindow = function(s, t) {
    let map = new Map();
    let res = '';
    for(let i=0;i<t.length;i++){
        map.set(t[i],map.get(t[i])?map.get(t[i])+1:1)
    }
    let typeSum = map.size;
    let l=0,r=0;
    while(r<s.length){
        if(map.has(s[r])){
            map.set(s[r],map.get(s[r])-1);
        }
        if(map.get(s[r])===0){
            typeSum--;
        }
        while(typeSum===0){
                let newRes = s.substring(l,r+1);
                //寻找最短的
                if(newRes.length<res.length||!res){
                    res = newRes;
                }
                if(map.has(s[l])){
                    if(map.get(s[l])===0) typeSum++;
                    map.set(s[l],map.get(s[l])+1);
                    
                }
                l++;
            
        }
        r++;
    }
    return res;
};

