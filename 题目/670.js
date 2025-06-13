/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  //思路：splice string
  //iterate : find the max number sub and min number sub；
  //swap min number and max number
  //other

  // [1,3,2,4]
  // [4,3,2,1]
  const _maxArr = num
    .toString()
    .split("")
    .sort((a, b) => b - a);
  const _numArr = num.toString().split("");

  for (let i = 0; i < _maxArr.length; ++i) {
    if (_maxArr[i] > _numArr[i]) {
      let _maxSub = null;
      nei: for (let j = _numArr.length - 1; j > 0; j--) {
        if (_numArr[j] == _maxArr[i]) {
          _maxSub = j;
          break nei;
        }
      }

      const _minSub = i;
      const temp = _numArr[_maxSub];
      _numArr[_maxSub] = _numArr[_minSub];
      _numArr[_minSub] = temp;
      break;
    }
  }
  return parseInt(_numArr.join(""));
};
