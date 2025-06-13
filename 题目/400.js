/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let digit = 1;
    let count = 9;
    let start = 1;
    while(n > count) {
        n -= count;
        digit++;
        start *= 10;
        count = 9 * start * digit;
    } // a
    const calcNumByDigit = Math.floor((n-1) / digit);
    const num = `${start + calcNumByDigit}`;// b
    const index = (n-1) % digit;
    return num[index];
};
