# Hash Tables

Hash tables, also known as hash maps, are a popular data structure used in computer science to store and retrieve data quickly. A hash table works by using a hash function to convert a key into an index into an array of buckets or slots, where the corresponding value can be stored.

## Definition

A hash table is a data structure that stores key-value pairs and supports constant-time (O(1)) operations for insertion, deletion, and lookup. In a hash table, keys are hashed to produce an index into an array of buckets or slots, where the corresponding value is stored.

## Hash Functions

The hash function is a crucial component of a hash table. A good hash function should have the following properties:

- Deterministic: Given the same input, it should always produce the same output.
- Uniform: It should distribute the keys uniformly across the buckets to minimize collisions.
- Efficient: It should be fast to compute.

## Collision Resolution

Collisions occur when two or more keys hash to the same index in the array. There are several strategies for handling collisions:

- Separate Chaining: In this strategy, each bucket in the array contains a linked list of key-value pairs that hash to the same index. When a collision occurs, the new key-value pair is added to the end of the linked list.

- Open Addressing: In this strategy, when a collision occurs, the algorithm searches for the next available slot in the array until an empty slot is found. There are several techniques for finding the next available slot, including linear probing, quadratic probing, and double hashing.

## Complexity

The complexity of hash table operations depends on the quality of the hash function, the size of the array, and the number of collisions. In the best case, where there are no collisions, hash table operations have a constant time complexity of O(1). In the worst case, where all keys hash to the same index, the time complexity of hash table operations is O(n), where n is the number of keys.

| Insert | O(1) | O(n) |
| ------ | ---- | ---- |
| Delete | O(1) | O(n) |
| Lookup | O(1) | O(n) |

## Conclusion

Hash tables are a powerful data structure that can be used to store and retrieve data quickly. By using a good hash function and an appropriate collision resolution strategy, hash tables can provide constant-time operations for insertion, deletion, and lookup. However, the performance of hash tables depends on the quality of the hash function and the number of collisions, so it is important to choose an appropriate size for the array and collision resolution strategy.
