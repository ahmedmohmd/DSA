import HeapSort from "./src/data-structres/heap/utils/heap-sort";

const array = [5, 3, 1, 2, 4];
const sort = new HeapSort(array);

sort.sort();

console.log(sort.data);
