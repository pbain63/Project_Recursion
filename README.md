# Project: Recursion

A JavaScript project from [The Odin Project](https://www.theodinproject.com/lessons/javascript-recursion) that explores two classic computer science problems: the Fibonacci sequence and merge sort. The project demonstrates how to solve problems using both iteration and recursion.

## About the Project

The purpose of this project is to strengthen my understanding of recursion by implementing three algorithms in JavaScript:

- **Fibonacci with iteration (`fibs.js`):** Generates a Fibonacci sequence using a loop.
- **Fibonacci with recursion (`fibsRec.js`):** Generates the same sequence by calling the function recursively.
- **Merge sort (`mergeSort.js`):** Sorts an array using the divide and conquer approach.

This project is part of my JavaScript learning journey through The Odin Project's Full Stack JavaScript curriculum.

## Built With

- JavaScript (ES6+)
- Node.js
- Git
- GitHub

## Project Requirements

The project follows the main requirements of The Odin Project assignment:

1. Implement the Fibonacci sequence using iteration.
2. Implement the Fibonacci sequence using recursion.
3. Test both Fibonacci implementations with different input values.
4. Implement a recursive merge sort algorithm that returns a sorted array.
5. Run the JavaScript files from the command line using Node.js.

## Project Structure

```text
Project_Recursion/
├── fibs.js
├── fibsRec.js
├── mergeSort.js
├── README.md
├── LICENSE
└── .gitignore
```

## Features and Implementations

### 1. Fibonacci Sequence Using Iteration

**File:** `fibs.js`

The `fibs(n)` function generates the first `n` numbers of the Fibonacci sequence using a loop.

Each number after the first two is calculated by adding the previous two numbers.

For example:

```javascript
fibs(8); // returns [0, 1, 1, 2, 3, 5, 8, 13]
```

The implementation also handles non positive inputs by returning a message requesting a valid number of elements.

**Concepts practiced:**
- Arrays
- Variables and loops
- Conditional statements
- Fibonacci sequence generation
- Basic input validation

### 2. Fibonacci Sequence Using Recursion

**File:** `fibsRec.js`

The `fibsRec(n)` function generates the first `n` numbers of the Fibonacci sequence recursively.

Instead of using a loop to generate the sequence, the function calls itself with a smaller input until it reaches a base case. It then builds the sequence as the recursive calls return.

For example:

```javascript
fibsRec(8); // returns [0, 1, 1, 2, 3, 5, 8, 13]
```

The implementation includes base cases for the first and second Fibonacci numbers and handles non positive inputs.

**Concepts practiced:**
- Recursive function calls
- Base cases
- Recursive call stack
- Returning values from recursive calls
- Building an array through recursion

### 3. Merge Sort Using Recursion

**File:** `mergeSort.js`

The `mergeSort(array)` function sorts an array of numbers using the merge sort algorithm.

Merge sort follows the **divide and conquer** approach. It divides an array into smaller sub arrays, recursively sorts those sub arrays, and merges them back together in ascending order.

The implementation uses a helper function named `merge(left, right)` to combine two sorted arrays.

**How it works:**

1. **Base case:** If the array contains zero or one element, return it because it is already sorted.
2. **Divide:** Find the middle index and split the array into left and right halves.
3. **Conquer:** Recursively sort both halves using `mergeSort()`.
4. **Combine:** Use `merge()` to combine the sorted halves into one sorted array.

Example:

```javascript
mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);
// [0, 1, 1, 2, 3, 5, 8, 13]
```

The algorithm also handles empty arrays, single element arrays, already sorted arrays, and arrays containing negative numbers.

**Concepts practiced:**
- Divide and conquer algorithms
- Recursion and base cases
- Array slicing
- Helper functions
- Comparing and merging values
- Sorting algorithms

## Getting Started

### Prerequisites

You need Node.js installed on your computer to run the JavaScript files from the terminal.

Check whether Node.js and npm are installed:

```bash
node --version
npm --version
```

If both commands display version numbers, you can continue.

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/pbain63/Project_Recursion.git
```

**2. Navigate to the project directory**

```bash
cd Project_Recursion
```

**3. Run the JavaScript files**

Run each file separately:

```bash
node fibs.js
```

```bash
node fibsRec.js
```

```bash
node mergeSort.js
```

or if `nodemon` module is installed, then
```bash
nodemon (file_name.js)
```

Each file contains example function calls using `console.log()`, so the results are displayed in the terminal.

No additional npm packages are required to run these files.

## Example Outputs

### Fibonacci using iteration

Running:

```bash
node fibs.js
```

The file includes examples that produce results such as:

```text
fibs(1)  → [0]
fibs(2)  → [0, 1]
fibs(3)  → [0, 1, 1]
fibs(8)  → [0, 1, 1, 2, 3, 5, 8, 13]
```

A non positive input returns a message requesting a valid number of elements.

### Fibonacci using recursion

Running:

```bash
node fibsRec.js
```

The file demonstrates the recursive implementation with examples such as:

```text
fibsRec(1) → [0]
fibsRec(2) → [0, 1]
fibsRec(3) → [0, 1, 1]
fibsRec(8) → [0, 1, 1, 2, 3, 5, 8, 13]
```

### Merge sort

Running:

```bash
node mergeSort.js
```

The file demonstrates several inputs and their sorted results:

```javascript
mergeSort([]);
// []

mergeSort([73]);
// [73]

mergeSort([1, 2, 3, 4, 5]);
// [1, 2, 3, 4, 5]

mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);
// [0, 1, 1, 2, 3, 5, 8, 13]

mergeSort([110, -1, 4, 0, -5, 7, -19]);
// [-19, -5, -1, 0, 4, 7, 110]
```

## What I Learned

Through this project, I practiced and improved my understanding of:

- The difference between iteration and recursion.
- How to identify and implement base cases.
- How recursive functions call themselves with smaller inputs.
- How recursive calls return values and build results.
- How to solve problems by breaking them into smaller sub problems.
- How the divide and conquer strategy works in merge sort.
- How to use helper functions to organize algorithmic logic.
- How to execute JavaScript programs using Node.js from the command line.

One of the most valuable lessons was learning that recursion is not simply a function calling itself. A correct recursive solution needs a clear stopping condition and a way to combine the results of smaller problems.

## What I Would Like to Improve

As I continue learning JavaScript and computer science fundamentals, I would like to:

- Explore the time and space complexity of recursive algorithms.
- Compare recursive and iterative approaches in terms of performance.
- Practice writing additional recursive algorithms.
- Add automated tests to verify edge cases and expected outputs.

## Useful Resources

- [The Odin Project. Project: Recursion](https://www.theodinproject.com/lessons/javascript-recursion)
- [The Odin Project. JavaScript Course](https://www.theodinproject.com/paths/full-stack-javascript)
- [MDN Web Docs: Recursion](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)
- [MDN Web Docs: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Node.js Documentation](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)


## License

This project is available under the MIT License. See the [LICENSE](LICENSE) file for details.
