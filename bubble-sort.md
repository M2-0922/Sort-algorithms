# Bubble Sort

`Bubble Sort` is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.

```
Input: arr[] = {5, 1, 4, 2, 8}

/=> First Pass:

Bubble sort starts with very first two elements, comparing them to check which one is greater.

( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.

( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4
( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.

/=> Second Pass:

Now, during second iteration it should look like this:
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 )
( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 )

/=> Third Pass:

Now, the array is already sorted, but our algorithm does not know if it is completed.
The algorithm needs one whole pass without any swap to know it is sorted.
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
```

---

`Bubble sort`, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent pairs and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. This algorithm starts at the beginning of the array, compares each element with the element immediately to the right of it, and makes a swap if the elements are out of order with each other. The algorithm, which is a comparison sort, is named for the way smaller or larger elements `“bubble”` to the top of the list.

![](https://miro.medium.com/max/600/1%2A1MiLjMYgr2r2fDORCJn89w.gif)

Here we create a variable swap that is a flag to indicate whether or not a swap occurred during a given pass of the array. If the swap returns false at the end of the pass, that means no swaps occurred because everything was in order, and therefore, the array is sorted.

---

### Follow the below steps to solve the problem:

- Run a nested for loop to traverse the input array using two variables i and j, such that 0 ≤ i < n-1 and 0 ≤ j < n-i-1
- If arr[j] is greater than arr[j+1] then swap these adjacent elements, else move on
- Print the sorted array

Below is the implementation of the above approach:

```
function swap(arr, xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

// An optimized version of Bubble Sort

function bubbleSort( arr, n){

    var i, j;

    for (i = 0; i < n-1; i++){
        for (j = 0; j < n-i-1; j++){
            if (arr[j] > arr[j+1]){
                swap(arr,j,j+1);
            }
        }
    }
}

- Output -

Sorted array:
1 2 4 5 8

Time Complexity: O(N2)
Auxiliary Space: O(1) '
```
