/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let res = "";
    while(columnNumber > 0) {
        // 65时'A'的ASCII码
        res = String.fromCharCode(65 + (columnNumber - 1) % 26) + res;
        columnNumber = ((columnNumber - 1) / 26) ^ 0;
    }
    return res;
};
