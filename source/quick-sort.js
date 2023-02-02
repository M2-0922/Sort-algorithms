function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) { // O(N)
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// console.log(quickSort([6,3,6,84,88,45,3,1]));
// let arr = [2,3,4,5];


console.log(performance.now());
console.log(quickSort([6,3202,6,8423,88,4512,3,1121]));
console.log(performance.now());
// let arr2 = [5,6,7];
// let merge = [...arr, ...arr2]
// console.log(merge);