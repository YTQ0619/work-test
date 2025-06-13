/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    var result = [];
    if (!canWordBreak(s, wordDict)) {
        return result;
    }
    function findWord(str, keyList, lastStr = '') {
        var resultStr = lastStr;
        if(!str.length) {
            result.push(resultStr.trim());
            return;
        }
        for(let i = 0; i < keyList.length; i++) {
            if(str.substr(0, keyList[i].length) === keyList[i]) {
                resultStr = lastStr + keyList[i] + ' ';
                findWord(str.slice(keyList[i].length), keyList, resultStr);
            }
        }

    }
    findWord(s, wordDict);
    return result;
};
var canWordBreak = (s, wordDict, w = new Set(wordDict), dp = [true]) => {
   for(var j = 0; ++j <= s.length;)
      for(var i = -1; ++i < j;) 
        if (dp[j] = dp[i] & w.has(s.substring(i, j))) break
    return dp[s.length]
};
