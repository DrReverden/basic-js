const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  return arr.reduce((transformedArr, currentEl, currentIndex) => {
    switch (currentEl) {
      case '--discard-next':
      if (currentIndex < arr.length - 1) {
        return transformedArr
      }
      break;

      case '--double-next':
        if (currentIndex < arr.length - 1) {
          transformedArr.push(arr[currentIndex + 1]);
        }
        break;

      case '--discard-prev':
        if (currentIndex > 0 && arr[currentIndex - 2] !== '--discard-next') {
          transformedArr.pop();
        }
        break;

        case '--double-prev':
          if (currentIndex > 0 && arr[currentIndex - 2] !== '--discard-next') {
            transformedArr.push(arr[currentIndex - 1]);
          }
          break;

        default:
          if (arr[currentIndex - 1] !== '--discard-next') {
            transformedArr.push(currentEl)
          }
          break
    }
    return transformedArr
  }, [])
}

module.exports = {
  transform
};
