# Insertion Sort

Insertion sort is a simple sorting algorithm that is commonly used in computer science. It is an in-place comparison-based sorting algorithm, meaning it does not require extra memory to perform the sort. Insertion sort is efficient for small lists and is often used as the building block for more complex sorting algorithms.

The idea behind insertion sort is to divide the input array into two subarrays: a sorted subarray and an unsorted subarray. Initially, the sorted subarray contains only the first element of the input array, and the unsorted subarray contains the rest of the elements. The algorithm then iteratively picks an element from the unsorted subarray, finds its correct position in the sorted subarray, and inserts it into that position. This process repeats until all elements are in the sorted subarray, resulting in a sorted array.

## Table of Complexities

|      | Best Case | Average Case | Worst Case | Space Complexity |
| ---- | --------- | ------------ | ---------- | ---------------- |
| Time | O(n)      | O(n^2)       | O(n^2)     | O(1)             |

In the best case scenario, where the input array is already sorted, insertion sort only needs to traverse the input array once to verify that it is sorted, resulting in a time complexity of O(n). However, in the average and worst case scenarios, where the input array is unsorted, insertion sort has to compare and swap elements many times, resulting in a time complexity of O(n^2).

Insertion sort has a space complexity of O(1) because it only requires a constant amount of extra memory to perform the sort.

## Application of the Algorithm

Insertion sort is often used in situations where the input array is small, or where the input array is almost sorted. In these cases, insertion sort can be faster than more complex sorting algorithms such as quicksort or mergesort, which have higher time complexities.

Insertion sort is also commonly used as the building block for more complex sorting algorithms. For example, the Timsort algorithm, which is used in many programming languages and libraries, uses insertion sort to sort small subarrays, and then uses merge sort to merge these subarrays together.

Insertion sort can also be useful in situations where elements need to be inserted into a sorted list one at a time, as it can maintain the sorted order of the list efficiently.

In conclusion, insertion sort is a simple and efficient sorting algorithm that is useful in a variety of situations. While it may not be the fastest sorting algorithm in all cases, its simplicity and low space complexity make it a valuable tool in the toolbox of any computer scientist or software developer.
