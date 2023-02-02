function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      [array[i], array[min]] = [array[min], array[i]]; // swap on es6
    }
  }
  return array;
}

console.log(selectionSort([64, 25, 12, 22, 11]));
console.log(selectionSort([56, 12, 45, 78, 23, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));