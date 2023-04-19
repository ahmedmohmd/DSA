# Stack Data Structure

Stack Data Structure
A stack is a data structure that follows the Last-In-First-Out (LIFO) principle. In other words, the last element added to the stack will be the first element removed from the stack. The operations supported by a stack are adding an element to the top of the stack (push) and removing an element from the top of the stack (pop).

## Table of complexities

| Operation | Best Case | Average Case | Worst Case |
| --------- | --------- | ------------ | ---------- |
| Push      | O(1)      | O(1)         | O(1)       |
| Pop       | O(1)      | O(1)         | O(1)       |
| Peek      | O(1)      | O(1)         | O(1)       |
| Search    | O(n)      | O(n)         | O(n)       |
| Size      | O(1)      | O(1)         | O(1)       |

## Use Cases

1. Function Calls
   Stacks are used in programming languages to keep track of function calls. When a function is called, its arguments and local variables are pushed onto the stack. When the function returns, its variables are popped off the stack.

2. Browser History
   Stacks are used in web browsers to maintain the history of visited web pages. Each time a user visits a new page, it is pushed onto the stack. When the user clicks the "back" button, the last visited page is popped off the stack.

3. Undo/Redo Operations
   Stacks are used in applications that support undo/redo operations. When a user performs an action, it is pushed onto the stack. When the user chooses to undo the action, the last action is popped off the stack and reversed.

4. Parsing Expressions
   Stacks are used in compilers and interpreters to parse expressions. When an expression is encountered, it is pushed onto the stack. When an operator is encountered, the operands are popped off the stack and the result is pushed back onto the stack.

In conclusion, stacks are useful data structures that allow for efficient data access and manipulation, especially when working with a large number of elements. They have a wide range of use cases, including function calls, browser history, undo/redo operations, and parsing expressions. The complexity of push, pop, peek, and size operations in a stack is O(1) in the best, average, and worst case scenarios. However, the complexity of a search operation in a stack is O(n) in the best case, O(n) in the average case, and O(n) in the worst case.
