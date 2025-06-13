/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(s) {
    let sum = 0, i = s.length - 1, carry = 1;

    while (i >= 0) {
        let cur = s[i].charCodeAt() - 64;

        sum += cur * carry;
        carry *= 26;
        i--;
    }

    return sum;
};
