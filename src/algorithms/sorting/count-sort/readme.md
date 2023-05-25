# Count Sort Algorithm

Count Sort is a simple yet efficient sorting algorithm used to sort elements in a specific range. It is particularly useful when the range of input values is small compared to the number of elements to be sorted. Count Sort operates by counting the frequency of each distinct element in the input array, and then using this information to determine the correct position of each element in the sorted output.

## How Count Sort Works

The Count Sort algorithm follows these steps:

1. Find the maximum element in the input array and determine the range of values. This information is necessary to create a count array with a size equal to the range of values.
2. Initialize a count array of size equal to the range of values, with all elements set to 0.
3. Iterate through the input array and increment the count of each element in the count array.
4. Modify the count array by adding the previous count to the current count. This step helps determine the correct position of each element in the sorted output.
5. Create a sorted array with the same size as the input array.
6. Iterate through the input array in reverse order. For each element, find its correct position in the sorted array using the count array. Decrease the count of that element in the count array.
7. Place the element in its correct position in the sorted array.
8. Repeat steps 6 and 7 until all elements have been placed in the sorted array.

The Count Sort algorithm provides a stable sort, which means that elements with equal values retain their relative order in the sorted output.

## Time and Space Complexity

The time and space complexity of the Count Sort algorithm can be summarized as follows:

| Complexity       | Notation | Description                   |
| ---------------- | -------- | ----------------------------- |
| Time Complexity  | O(n + k) | Counting and placing elements |
| Space Complexity | O(n + k) | Count and output array        |

In the above table, `n` represents the number of elements to be sorted, and `k` denotes the range of values in the input array.

## Applications of Count Sort

Count Sort has several applications, especially when the range of values in the input array is relatively small. Some common use cases include:

1. Sorting characters: Count Sort can efficiently sort a string of characters based on their ASCII values.
2. Sorting integers: When sorting integers within a known range, Count Sort can outperform other comparison-based sorting algorithms.
3. Frequency analysis: Count Sort can be used to determine the frequency distribution of elements in an array.
4. Radix Sort: Count Sort is used as a subroutine in Radix Sort, a more complex sorting algorithm.

Count Sort's ability to handle a specific range of values makes it a valuable tool in situations where other sorting algorithms may be less efficient.

---

By using the Count Sort algorithm, you can efficiently sort elements in a specific range, taking advantage of its linear time complexity. Whether you're sorting characters, integers, or performing frequency analysis, Count Sort provides a reliable solution. With its simple implementation and stable sorting properties, Count Sort proves to be an essential algorithm in various applications.
