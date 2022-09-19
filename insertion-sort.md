# Insertion Sort

`Insertion sort `is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.

## Characteristics of Insertion Sort:

- This algorithm is one of the simplest algorithm with simple implementation
- Basically, Insertion sort is efficient for small data values
- Insertion sort is adaptive in nature, i.e. it is appropriate for data sets which are already partially sorted.

## Working of Insertion Sort algorithm:

<blockquote><p>Consider an example: arr[]: {12, 11, 13, 5, 6}</p><figure class="table"><table><thead><tr><th>&nbsp; &nbsp;12 &nbsp;&nbsp;</th><th>&nbsp; &nbsp;11 &nbsp;&nbsp;</th><th>&nbsp; &nbsp;13 &nbsp;&nbsp;</th><th>&nbsp; &nbsp;5 &nbsp;&nbsp;</th><th>&nbsp; &nbsp;6 &nbsp;&nbsp;</th></tr></thead></table></figure><p><strong>First Pass:</strong></p><ul><li>Initially, the first two elements of the array are compared in insertion sort.</li></ul><figure class="table"><table><tbody><tr><td>&nbsp; &nbsp;<strong>12 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;<strong>11 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;13 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;5 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;6 &nbsp;&nbsp;</td></tr></tbody></table></figure><ul><li>Here, 12 is greater than 11 hence they are not in the ascending order and 12 is not at its correct position. Thus, swap 11 and 12.</li><li>So, for now 11 is stored in a sorted sub-array.</li></ul><figure class="table"><table><tbody><tr><td>&nbsp; &nbsp;<strong>11 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;<strong>12 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;13 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;5 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;6 &nbsp;&nbsp;</td></tr></tbody></table></figure><p><strong>Second Pass:</strong></p><ul><li>&nbsp;Now, move to the next two elements and compare them</li></ul><figure class="table"><table><tbody><tr><td>&nbsp; &nbsp;11 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;<strong>12 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;<strong>13 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;5 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;6 &nbsp;&nbsp;</td></tr></tbody></table></figure><ul><li>Here, 13 is greater than 12, thus both elements seems to be in ascending order, hence, no swapping will occur. 12 also stored in a sorted sub-array along with 11</li></ul><p><strong>Third Pass:</strong></p><ul><li>Now, two elements are present in the sorted sub-array which are <strong>11 </strong>and <strong>12</strong></li><li>Moving forward to the next two elements which are 13 and 5</li></ul><figure class="table"><table><tbody><tr><td>&nbsp; &nbsp;11 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;12 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;<strong>13 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;<strong>5 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;6 &nbsp;&nbsp;</td></tr></tbody></table></figure><ul><li>Both 5 and 13 are not present at their correct place so swap them</li></ul><figure class="table"><table><tbody><tr><td>&nbsp; &nbsp;11 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;12 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;<strong>5 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;<strong>13 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;6 &nbsp;&nbsp;</td></tr></tbody></table></figure><ul><li>After swapping, elements 12 and 5 are not sorted, thus swap again</li></ul><figure class="table"><table><tbody><tr><td>&nbsp; &nbsp;11 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;<strong>5 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;<strong>12 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;13 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;6 &nbsp;&nbsp;</td></tr></tbody></table></figure><ul><li>Here, again 11 and 5 are not sorted, hence swap again</li></ul><figure class="table"><table><tbody><tr><td>&nbsp; &nbsp;<strong>5 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;<strong>11 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;12 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;13 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;6 &nbsp;&nbsp;</td></tr></tbody></table></figure><ul><li>here, it is at its correct position</li></ul><p><strong>Fourth Pass:</strong></p><ul><li>Now, the elements which are present in the sorted sub-array are <strong>5, 11 </strong>and <strong>12</strong></li><li>Moving to the next two elements 13 and 6</li></ul><figure class="table"><table><tbody><tr><td>&nbsp; &nbsp;5 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;11 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;12 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;<strong>13 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;<strong>6 &nbsp;&nbsp;</strong></td></tr></tbody></table></figure><ul><li>Clearly, they are not sorted, thus perform swap between both</li></ul><figure class="table"><table><tbody><tr><td>&nbsp; &nbsp;5 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;11 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;12 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;<strong>6 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;<strong>13 &nbsp;&nbsp;</strong></td></tr></tbody></table></figure><ul><li>Now, 6 is smaller than 12, hence, swap again</li></ul><figure class="table"><table><tbody><tr><td>&nbsp; &nbsp;5 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;11 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;<strong>6 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;<strong>12 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;13<strong> &nbsp;&nbsp;</strong></td></tr></tbody></table></figure><ul><li>Here, also swapping makes 11 and 6 unsorted hence, swap again</li></ul><figure class="table"><table><tbody><tr><td>&nbsp; &nbsp;5 &nbsp;&nbsp;</td><td>&nbsp; &nbsp;<strong>6</strong> &nbsp;&nbsp;</td><td>&nbsp; &nbsp;<strong>11 &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;12<strong> &nbsp;&nbsp;</strong></td><td>&nbsp; &nbsp;13<strong> &nbsp;&nbsp;</strong></td></tr></tbody></table></figure><ul><li>Finally, the array is completely sorted.</li></ul><div hidead="auto"></div></blockquote>

![](https://media.geeksforgeeks.org/wp-content/uploads/insertionsort.png)

## Insertion Sort Algorithm

To sort an array of size N in ascending order:

- Iterate from arr[1] to arr[N] over the array.
- Compare the current element (key) to its predecessor.
- If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.

### Below is the implementation:

```
function insertionSort(arr, n)
{
    let i, key, j;
    for (i = 1; i < n; i++)
    {
        key = arr[i];
        j = i - 1;

        /* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

- Output -
5 6 11 12 13

Time Complexity: O(N^2)
Auxiliary Space: O(1)
```
