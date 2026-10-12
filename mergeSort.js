const merge = function (left, right) {
  const result = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
};

const mergeSort = function (array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);

  const left = array.slice(0, middle);
  const right = array.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
};

console.log(mergeSort([])); // returns []
console.log(mergeSort([73])); // returns [73]
console.log(mergeSort([1, 2, 3, 4, 5])); // returns [1, 2, 3, 4, 5]
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // returns [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([110, -1, 4, 0, -5, 7, -19])); // returns [-19, -5,  -1, 0, 4,  7, 110]
