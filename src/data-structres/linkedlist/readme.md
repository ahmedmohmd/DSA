# Linked List Data Structure

Linked List is a linear data structure in which elements are stored in a linked manner. Unlike arrays, linked lists do not store data elements in contiguous locations. Instead, they store elements in nodes, where each node contains a reference to the next node in the sequence. This allows for efficient insertion and deletion of elements at any position in the list.

## Anatomy of a Linked List

A linked list consists of nodes that are linked together using pointers. Each node contains a data element and a reference to the next node in the sequence. The first node in the list is called the head, and the last node is called the tail.

Here's a visual representation of a simple linked list:

```bash
  head -> node1 -> node2 -> node3 -> tail -> null
```

In this example, head points to the first node in the list, and tail points to the last node. The next reference of each node points to the next node in the sequence.

## Types of Linked Lists

There are several types of linked lists, including:

- Singly Linked List: A singly linked list is a linked list in which each node contains a data element and a reference to the next node in the sequence.

- Doubly Linked List: A doubly linked list is a linked list in which each node contains a data element and references to the next and previous nodes in the sequence.

- Circular Linked List: A circular linked list is a linked list in which the tail node points back to the head node, forming a loop.

## Complexity Analysis

Here's a table of complexities for the operations on linked lists:

| Operation                | BestCase | Worst Case | Average Case |
| :----------------------- | :------- | :--------- | ------------ |
| Insertion at beginning   | O(1)     | O(1)       | O(1)         |
| Insertion at end         | O(1)     | O(n)       | O(1)         |
| Insertion at position    | O(1)     | O(n)       | O(n)         |
| Deletion at beginning    | O(1)     | O(1)       | O(1)         |
| Deletion at end          | O(1)     | O(n)       | O(n)         |
| Deletion at position     | O(1)     | O(n)       | O(n)         |
| Searching for an element | O(1)     | O(n)       | O(n)         |

Note that the complexity of insertion and deletion at the beginning of a linked list is always O(1), since it only involves updating the head pointer.
