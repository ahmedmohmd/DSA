import HeapSort from "./src/data-structres/heap/utils/heap-sort";

const array = [1, 5, 3, 9, 8, 6, 5, 2];

let heapsort = new HeapSort(array);

heapsort.sort(false);

console.log(heapsort.data);
