import { Heap, PeriorityQueue } from "./src/data-structres/heap";

let heap = new Heap();

heap.insert(5);
heap.insert(4);
heap.insert(10);
heap.insert(60);
heap.insert(9);
heap.insert(9);

console.log(heap.getData);
console.log(heap.getKthLargestValue(6));
