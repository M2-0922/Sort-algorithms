The `merge sort` algorithm works by dividing the array into smaller arrays, sorting them, and then merging them back together in sorted order. The sorting is done recursively, so that eventually the `smallest subarrays` are reached and can be returned as already sorted. The merge function is used to merge two sorted arrays back into a single sorted array.

- If the array has only one element, it is already sorted, so return the array.
- Split the array in half and assign each half to two separate arrays, left and right.
- Recursively call the mergeSort function on both the left and right arrays to sort them.
- Merge the two sorted arrays back together into a single sorted array using the merge function.

The `merge` function works by comparing the first elements of each of the two input arrays, and adding the smaller element to a new result array. This process continues until one of the input arrays is empty, at which point the remaining elements from the `non-empty` array are added to the result array.

The result of the merge function is a single sorted array containing all of the elements from the input arrays. By recursively applying the `mergeSort` and `merge` functions, the original unsorted array is transformed into a sorted array.

```js
// Merge sort function
function mergeSort(arr) {
  // If the array has only one element, it's already sorted, so return it
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array in half
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively sort the two halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted halves back together
  return merge(sortedLeft, sortedRight);
}

// Merge function
function merge(left, right) {
  const result = [];

  // Compare the elements of the two arrays and add the smaller one to the result array
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  // Add any remaining elements from the left or right arrays to the result array
  while (left.length > 0) {
    result.push(left.shift());
  }
  while (right.length > 0) {
    result.push(right.shift());
  }

  return result;
}
```