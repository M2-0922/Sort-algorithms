The `quick sort` algorithm works by selecting a pivot element and partitioning the array into two subarrays: one containing elements less than the pivot, and the other containing elements greater than or equal to the pivot. The pivot is then placed between the two subarrays. This process is repeated recursively on the subarrays until the subarrays are small enough to be considered sorted. The final step is to concatenate the sorted subarrays back into a single sorted array.

- If the array has 0 or 1 elements, it is already sorted, so return the array.
- Choose a pivot element, which will be used to partition the array into two subarrays.
- Partition the array into two subarrays: one containing elements that are less than the pivot, and the other containing elements that are greater than or equal to the pivot.
- Recursively call the quickSort function on both the left and right subarrays to sort them.

Concatenate the sorted left subarray, the pivot element, and the sorted right subarray to form a single sorted array.

The pivot element acts as a dividing point, allowing the algorithm to split the array into smaller and smaller subarrays. By continuing to split the subarrays and sort them, the algorithm eventually sorts the entire array. The key advantage of quick sort is its ability to sort large arrays very quickly in practice, although it can be slower in the worst case than other sorting algorithms.

```js
// Quick sort function
function quickSort(arr) {
  // If the array has 0 or 1 elements, it's already sorted, so return it
  if (arr.length <= 1) {
    return arr;
  }

  // Choose a pivot element
  const pivot = arr[arr.length - 1];

  // Partition the array around the pivot
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort the left and right partitions
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  // Concatenate the sorted left partition, pivot, and sorted right partition
  return sortedLeft.concat([pivot], sortedRight);
}
```