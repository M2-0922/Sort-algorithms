function radixSort(arr) {
  const max = Math.max(...arr);

  let exp = 1;
  while (max / exp > 0) {
    countingSort(arr, exp);
    exp *= 10;
  }
  return arr;
}

function countingSort(arr, exp) {
    const result = [];
    const count = new Array(10).fill(0);
    
    for (let i = 0; i < arr.length; i++) {
        count[Math.floor(arr[i] / exp) % 10]++;
    }
    
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }
    
    for (let i = arr.length - 1; i >= 0; i--) {
        result[--count[Math.floor(arr[i] / exp) % 10]] = arr[i];
    }
    
    for (let i = 0; i < arr.length; i++) {
        arr[i] = result[i];
    }
}

console.log(performance.now());
console.log(radixSort([6,320221123,6,84232112,812128,45121212,3,11211212]));
console.log(performance.now());