# Selection Sort

The `selection sort algorithm` sorts an array by repeatedly finding the minimum element (considering ascending order) from the unsorted part and putting it at the beginning.

The algorithm maintains two subarrays in a given array.

- The subarray which already sorted.
- The remaining subarray was unsorted.

In every iteration of the selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.

## Flowchart of the Selection Sort:

![](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220203094305/Selection-Sort-Flowhchart.png)

<blockquote><p>Lets consider the following array as an example: <strong>arr[] = {64, 25, 12, 22, 11}</strong></p><p><strong>First pass:</strong></p><ul><li>For the first position in the sorted array, the whole array is traversed from index 0 to 4 sequentially. The first position where <strong>64 </strong>is stored presently, after traversing whole array it is clear that <strong>11 </strong>is the lowest value.</li></ul><figure class="table"><table><tbody><tr><td>&nbsp; &nbsp;<strong>64 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;25 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;12 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;22 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;11 &nbsp;&nbsp;</td></tr></tbody></table></figure><ul><li>Thus, replace 64 with 11. After one iteration <strong>11</strong>, which happens to be the least value in the array, tends to appear in the first position of the sorted list.</li></ul><figure class="table"><table><tbody><tr><td>&nbsp; &nbsp;<strong>11 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;25 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;12 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;22 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;64 &nbsp;&nbsp;</td></tr></tbody></table></figure><p><strong>Second Pass:</strong></p><ul><li>For the second position, where 25 is present, again traverse the rest of the array in a sequential manner.</li></ul><figure class="table"><table><tbody><tr><td>&nbsp; &nbsp;11 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;<strong>25 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;12 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;22 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;64 &nbsp;&nbsp;</td></tr></tbody></table></figure><ul><li>After traversing, we found that <strong>12</strong> is the second lowest value in the array and it should appear at the second place in the array, thus swap these values.</li></ul><figure class="table"><table><tbody><tr><td>&nbsp; &nbsp;11 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;<strong>12 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;25 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;22 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;64 &nbsp;&nbsp;</td></tr></tbody></table></figure><p><strong>Third Pass:</strong></p><ul><li>Now, for third place, where <strong>25</strong> is present again traverse the rest of the array and find the third least value present in the array.</li></ul><figure class="table"><table><tbody><tr><td>&nbsp; &nbsp;11 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;12<strong> &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;<strong>25</strong> &nbsp;&nbsp;</td><td>&nbsp; &nbsp;22 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;64 &nbsp;&nbsp;</td></tr></tbody></table></figure><ul><li>While traversing, <strong>22 </strong>came out to be the third least value and it should appear at the third place in the array, thus swap <strong>22 </strong>with element present at third position.</li></ul><figure class="table"><table><tbody><tr><td>&nbsp; &nbsp;11 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;12<strong> &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;<strong>22</strong> &nbsp;&nbsp;</td><td>&nbsp; &nbsp;25 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;64 &nbsp;&nbsp;</td></tr></tbody></table></figure><p><strong>Fourth pass:</strong></p><ul><li>Similarly, for fourth position traverse the rest of the array and find the fourth least element in the array&nbsp;</li><li>As <strong>25 </strong>is the 4th lowest value hence, it will place at the fourth position.</li></ul><figure class="table"><table><tbody><tr><td>&nbsp; &nbsp;11 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;12<strong> &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;22 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;<strong>25 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;64 &nbsp;&nbsp;</td></tr></tbody></table></figure><p><strong>Fifth Pass:</strong></p><ul><li>At last the largest value present in the array automatically get placed at the last position in the array</li><li>The resulted array is the sorted array.</li></ul><figure class="table"><table><thead><tr><th>&nbsp; &nbsp;11 &nbsp;&nbsp;</th><th>&nbsp; &nbsp;12<strong> &nbsp;&nbsp;</strong></th><th>&nbsp; &nbsp;22 &nbsp;&nbsp;</th><th>&nbsp; &nbsp;<strong>25 &nbsp;&nbsp;</strong></th><th>&nbsp; &nbsp;64 &nbsp;&nbsp;</th></tr></thead></table></figure>
</blockquote>

## Follow the below steps to solve the problem:

- Initialize minimum value(min_idx) to location 0.
- Traverse the array to find the minimum element in the array.
- While traversing if any element smaller than min_idx is found then swap both the values.
- Then, increment min_idx to point to the next element.
- Repeat until the array is sorted.

### Below is the implementation of the above approach:

```
function swap(arr,xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

function selectionSort(arr,  n)
{
    var i, j, min_idx;

    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;

        // Swap the found minimum element with the first element
        swap(arr,min_idx, i);
    }
}

- Output -
Sorted array:
11 12 22 25 64
```

## Complexity Analysis of Selection Sort:

Time Complexity: The time complexity of Selection Sort is O(N2) as there are two nested loops:

- One loop to select an element of Array one by one = O(N)
- Another loop to compare that element with every other Array element = O(N)

Therefore overall complexity = `O(N) * O(N) = O(N*N) = O(N2)`

`Auxiliary Space`: O(1) as the only extra memory used is for temporary variables while swapping two values in Array. The selection sort never makes more than O(N) swaps and can be useful when memory write is a costly operation.
