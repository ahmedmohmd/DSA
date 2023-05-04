# Undirected Graph Data Structure

An undirected graph is a type of graph data structure where each edge does not have a direction. This means that each node (also known as a vertex) can have one or more edges that connect to other nodes in the graph. Undirected graphs are commonly used in computer science and mathematics to represent relationships between objects or entities.

## Where We Use Undirected Graphs and an Example

Undirected graphs have a wide range of applications in computer science, including:

- Representing social networks, such as Facebook or LinkedIn
- Analyzing gene expression networks in bioinformatics
- Modeling road networks for navigation systems
- Representing connections between web pages in search engine algorithms

An example of an undirected graph is a social network, where each user is a node in the graph and the edges represent friendships or connections between users. In an undirected graph, the connection between two users is symmetric, meaning that if user A is connected to user B, then user B is also connected to user A.

## Time and Space Complexity Table

The time and space complexity of an undirected graph data structure depends on the specific operations being performed. The following table shows the best, average, and worst-case time complexities, as well as the worst-case space complexity, for some common operations:

| Operation     | Best Case Time | Average Case Time | Worst Case Time | Worst Case Space |
| ------------- | -------------- | ----------------- | --------------- | ---------------- |
| Add Vertex    | O(1)           | O(1)              | O(1)            | O(1)             |
| Add Edge      | O(1)           | O(1)              | O(1)            | O(1)             |
| Remove Vertex | O(V + E)       | O(V + E)          | O(V + E)        | O(1)             |
| Remove Edge   | O(1)           | O(E)              | O(E)            | O(1)             |
| Find Vertex   | O(1)           | O(1)              | O(1)            | O(V)             |
| Find Edge     | O(E)           | O(E)              | O(E)            | O(1)             |
| Traverse      | O(V + E)       | O(V + E)          | O(V + E)        | O(V)             |

## Conclusion

Undirected graphs are a useful data structure for representing relationships between objects or entities that do not have a direction. They have a wide range of applications in computer science, from modeling social networks to analyzing biological networks. When using undirected graphs, it is important to consider the time and space complexity of the operations being performed. This can help ensure that the graph remains efficient and scalable, even as it grows in size.
