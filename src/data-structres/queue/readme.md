# Queue Data Structure

A queue is a data structure that follows the First-In-First-Out (FIFO) principle. In other words, the first element added to the queue will be the first element removed from the queue. The operations supported by a queue are adding an element to the back of the queue (enqueue) and removing an element from the front of the queue (dequeue).

## Table of complexities

| Operation | Best Case | Average Case | Worst Case |
| --------- | --------- | ------------ | ---------- |
| Enqueue   | O(1)      | O(1)         | O(1)       |
| Dequeue   | O(1)      | O(1)         | O(1)       |
| Peek      | O(1)      | O(1)         | O(1)       |
| Search    | O(1)      | O(n)         | O(n)       |
| Size      | O(1)      | O(1)         | O(1)       |

## Use Cases

1. Process Scheduling
   Queues can be used for process scheduling in operating systems. The operating system maintains a queue of processes waiting to be executed. When a process is finished, the operating system removes it from the front of the queue and starts executing the next process in the queue.

2. Print Queue
   Queues are commonly used in print queues. When multiple users submit print requests, the requests are added to a queue. The printer takes print jobs from the front of the queue and prints them in the order they were received.

3. Web Server Request Handling
   Queues can be used in web servers to handle incoming requests. When a request is received, it is added to the end of the request queue. The server processes requests in the order they were received, taking requests from the front of the queue.

4. Breadth-First Search
   Queues are often used in graph traversal algorithms, such as breadth-first search. In this algorithm, the vertices of a graph are visited in a breadth-first order, which is achieved by using a queue to store the vertices that have been visited but whose neighbors have not yet been visited.

In conclusion, queues are useful data structures that allow for efficient data access and manipulation, especially when working with a large number of elements. They have a wide range of use cases, including process scheduling, print queues, web server request handling, and graph traversal algorithms. The complexity of enqueue, dequeue, peek, and size operations in a queue is O(1) in the best, average, and worst case scenarios. However, the complexity of a search operation in a queue is O(1) in the best case, O(n) in the average case, and O(n) in the worst case.
