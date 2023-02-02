/*

*/

function bubbleSort (array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

console.log(bubbleSort([5, 4, 3, 2, 1]));
console.log(bubbleSort([2,6,8,1,3,5,4,7]));
