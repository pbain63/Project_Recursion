const fibsRec = function (n) {
  if (n <= 0) {
    return "Please enter a valid number of elements to be given an answer.";
  }

  if (n === 1) {
    return [0];
  }

  if (n === 2) {
    return [0, 1];
  }

  const result = fibsRec(n - 1);

  result.push(result[result.length - 1] + result[result.length - 2]);

  return result;
};

console.log(fibsRec(-2)); // returns "Please enter a valid number of elements to be given an answer."
console.log(fibsRec(1)); // returns [0]
console.log(fibsRec(2)); // returns [0, 1]
console.log(fibsRec(3)); // returns [0, 1, 1]
console.log(fibsRec(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]
