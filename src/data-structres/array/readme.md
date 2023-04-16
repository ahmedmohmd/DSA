# Array Data Structure

An array is a data structure that stores a collection of elements of the same type in contiguous memory locations. It is one of the most basic and widely used data structures in computer programming.

# Time and Space Complexity

| Process   | Best | Average | Best | Space Complexity |
| --------- | ---- | ------- | ---- | ---------------- |
| Access    | O(1) | O(1)    | O(1) | O(n)             |
| Search    | O(1) | O(n/2)  | O(n) | O(1)             |
| Insertion | O(1) | O(n)    | O(n) | O(n)             |
| Deletion  | O(1) | O(n)    | O(n) | O(n)             |

- Accessing an element in an array is a constant time operation with a complexity of O(1).

- Searching an array has a best-case complexity of O(1) when the element is at the first index and a worst-case complexity of O(n) when the element is at the last index or not present in the array. On average, searching an array takes O(n/2) time.

- Inserting or deleting an element from an array has a worst-case complexity of O(n) as all elements after the insertion/deletion point need to be shifted. On average, the time complexity of insertion or deletion is O(n/2).

- Arrays have a space complexity of O(n), where n is the number of elements in the array.

# Array Operations

## Accessing Elements

Array elements can be accessed using their index position. The index starts from 0 and goes up to the length of the array minus one.

```typescript
// accessing array elements
const arr: number[] = [1, 2, 3, 4, 5];
console.log(arr[0]); // Output: 1
console.log(arr[3]); // Output: 4
```

## Insertion

Inserting an element into an array involves shifting all the elements from the insertion point to the end of the array to make room for the new element. The time complexity of insertion is O(n).

```typescript
// inserting an element
let arr: number[] = [1, 2, 3, 4, 5];
arr.splice(2, 0, 6);
console.log(arr); // Output: [1, 2, 6, 3, 4, 5]
```

## Deletion

Deleting an element from an array involves shifting all the elements from the deletion point to the end of the array one position to the left to fill the gap left by the deleted element. The time complexity of deletion is O(n).

```typescript
// deleting an element
let arr: number[] = [1, 2, 3, 4, 5];
arr.splice(2, 1);
console.log(arr); // Output: [1, 2, 4, 5]
```

## Search

Searching an element in an array involves traversing the array and comparing each element with the search element. The time complexity of searching is O(n).

```typescript
// searching an element
const arr: number[] = [1, 2, 3, 4, 5];
if (arr.includes(4)) {
  console.log("Element found");
} else {
  console.log("Element not found");
}
```

## Sorting

Arrays can be sorted using various sorting algorithms such as Bubble Sort, Insertion Sort, Selection Sort, Quick Sort, Merge Sort, and Heap Sort. The time complexity of sorting an array depends on the algorithm used.

```typescript
// sorting an array
let arr: number[] = [3, 1, 4, 2, 5];
arr.sort();
console.log(arr); // Output: [1, 2, 3, 4, 5]
```

## Multi-Dimensional Arrays

Multi-dimensional arrays are arrays that contain other arrays as their elements. They are useful for representing data in a grid-like format, such as matrices.

```typescript
// creating a 2D array
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0][0]); // Output: 1
console.log(matrix[1][2]); // Output: 6
```
