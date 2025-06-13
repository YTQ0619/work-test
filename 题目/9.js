/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){
        return false;
    }else if(String.prototype.split.call(x,'').reverse().join('')!=x){
        return false;
    }
    return true;
}
