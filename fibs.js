const fibs = function (n) {
  const result = [];

  if (n <= 0) {
    return "Please enter a valid number of elements to be given an answer.";
  }

  if (n >= 1) {
    result.push(0);
  }

  if (n >= 2) {
    result.push(1);
  }

  for (let i = 2; i < n; i++) {
    const nextNumber = result[i - 1] + result[i - 2];

    result.push(nextNumber);
  }

  return result;
};

console.log(fibs(-2)); // returns "Please enter a valid number of elements to be given an answer."
console.log(fibs(1)); // returns [0]
console.log(fibs(2)); // returns [0, 1]
console.log(fibs(3)); // returns [0, 1, 1]
console.log(fibs(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]
