# Bucket Sort Algorithm

Bucket Sort is a distribution-based sorting algorithm that works by partitioning the input into a finite number of buckets or ranges and then sorting the elements within each bucket. It is particularly useful when the input is uniformly distributed over a range. Bucket Sort operates by dividing the range of input values into equal-sized intervals, placing the elements into their corresponding buckets, and then sorting each bucket individually, either using another sorting algorithm or recursively applying Bucket Sort.

## How Bucket Sort Works

The Bucket Sort algorithm follows these steps:

1. Determine the range of values in the input array and the number of buckets to be used. The number of buckets can be calculated based on the input size and the range of values.
2. Create empty buckets, one for each interval, or range, of values.
3. Iterate through the input array and place each element into its corresponding bucket based on its value.
4. Sort each bucket individually. This step can be performed using another sorting algorithm, such as Insertion Sort or Quick Sort, or by recursively applying the Bucket Sort algorithm to each bucket.
5. Concatenate the sorted buckets in order to obtain the final sorted array.

The Bucket Sort algorithm provides a stable sort, meaning that elements with equal values retain their relative order in the sorted output.

## Time and Space Complexity

The time and space complexity of the Bucket Sort algorithm can be summarized as follows:

| Complexity       | Notation | Description                     |
| ---------------- | -------- | ------------------------------- |
| Time Complexity  | O(n + k) | Inserting elements into buckets |
| Space Complexity | O(n + k) | Buckets and output array        |

In the above table, `n` represents the number of elements to be sorted, and `k` denotes the number of buckets used.

## Applications of Bucket Sort

Bucket Sort has several applications, especially when the input is uniformly distributed over a range. Some common use cases include:

1. Sorting floating-point numbers: Bucket Sort is efficient when sorting floating-point numbers within a specific range.
2. Sorting integers: When the input consists of integers with a uniform distribution, Bucket Sort can provide a faster alternative to comparison-based sorting algorithms.
3. External sorting: Bucket Sort can be adapted for external sorting scenarios, where the data exceeds the available memory.
4. Histogram generation: Bucket Sort can be used to generate histograms by counting the number of elements falling into each bucket.

Bucket Sort's ability to exploit the distribution of input values makes it an effective sorting algorithm for certain scenarios, particularly when dealing with uniformly distributed data.

---

By utilizing the Bucket Sort algorithm, you can efficiently sort elements by partitioning them into buckets and then sorting each bucket individually. Whether you're sorting floating-point numbers, integers, or performing histogram generation, Bucket Sort provides a reliable solution. With its linear time complexity and stable sorting properties, Bucket Sort proves to be a valuable algorithm in various applications.
