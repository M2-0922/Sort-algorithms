The `radix sort` algorithm sorts an array of numbers by looking at the digits of each number, starting with the least significant digit and moving towards the most significant digit. On each pass, the numbers are placed into 10 "buckets" based on the value of their current digit. After all the digits have been considered, the elements from each bucket are concatenated back into a single array to form a sorted result.

Radix sort is especially efficient for sorting arrays of integers or strings that have a small number of possible values for each digit. However, for arrays with a large number of unique values, it may be slower than other sorting algorithms.

- Determine the maximum number of digits in any element in the array.
- Loop through each digit position, starting from the least significant digit and moving towards the most significant digit.
- On each iteration, place each element into one of 10 "buckets" based on the value of its current digit.
- After all digits have been considered, concatenate the elements from each bucket back into a single array to form a sorted result.

Radix sort is a non-comparative sorting algorithm that sorts an array of numbers or strings by considering the digits of each element, starting from the least significant digit and moving towards the most significant digit. By dividing the elements into "buckets" based on the value of their current digit, the algorithm is able to sort the array without comparing elements to each other. This makes it an efficient choice for arrays of integers or strings that have a small number of possible values for each digit. However, for arrays with a large number of unique values, it may be slower than other sorting algorithms.

```js
// Radix sort function
function radixSort(arr) {
  // Determine the maximum number of digits in any element
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, String(arr[i]).length);
  }

  // Loop through each digit position, starting from the least significant digit
  for (let d = 0; d < maxDigits; d++) {
    // Create an array of arrays to represent each bucket
    const buckets = Array.from({ length: 10 }, () => []);

    // Place each element into the appropriate bucket based on its dth digit
    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], d);
      buckets[digit].push(arr[i]);
    }

    // Concatenate all the buckets back into a single array
    arr = [].concat(...buckets);
  }

  return arr;
}

// Helper function to extract a specific digit from a number
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
```