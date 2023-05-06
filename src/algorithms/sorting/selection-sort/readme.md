# Selection Sort

Selection Sort is another simple sorting algorithm that works by repeatedly selecting the smallest element from an unsorted portion of the list and swapping it with the element at the beginning of the unsorted portion. This process is repeated until the entire list is sorted. Although Selection Sort has a better performance than Bubble Sort, it still has poor performance and is generally not used in real-world applications.

## Complexity Analysis

The following table summarizes the worst-case, best-case, and average-case time and space complexities of Selection Sort.

| Complexity   | Notation |
| ------------ | -------- |
| Worst-case   | O(n^2)   |
| Best-case    | O(n^2)   |
| Average-case | O(n^2)   |
| Space        | O(1)     |

Selection Sort also has a space complexity of O(1), meaning that the amount of extra memory used is constant and does not depend on the size of the input.

## Applications of Selection Sort

Similar to Bubble Sort, Selection Sort is rarely used in practical applications due to its poor performance. However, there are still some scenarios where it can be useful:

1. When sorting small data sets: If the number of items to be sorted is small, then the performance of Selection Sort may not be a concern, and its simplicity can make it an attractive option.

2. As a teaching tool: Selection Sort is a great algorithm for teaching students the basics of sorting algorithms. Its simple implementation can help students understand the underlying concepts of sorting.

3. As a part of more complex algorithms: Although Selection Sort may not be used as the primary sorting algorithm, it can still be a useful component of other, more complex algorithms. For example, some sorting algorithms, like Cocktail Sort and Gnome Sort, use Selection Sort as a subroutine.

In conclusion, Selection Sort is a simple and intuitive algorithm that is easy to implement and understand. However, due to its poor performance, it is generally not used in real-world applications.
