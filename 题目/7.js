/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let arr = x.toString().split('');
  let num;

  if (arr[0] !== '-') {
    num = Number(arr.reverse().join(''));
    return range(num);
  } else {
    arr.shift();
    num = Number(arr.reverse().join(''));
    return range(-num);
  }
};

let range = (num) => {
  if (num >= (-Math.pow(2, 31)) && num <= (Math.pow(2, 31) - 1)) {
    return num;
  }
  return 0;
}
