# Trees

A tree is a connected, undirected graph with no cycles. Recall that a cycle is a path that starts and ends at the same node. In a tree, there are no cycles, which means that there is only one possible path between any two nodes. Connected means that there is a path from any node to any other node, and there is no node, or set of nodes, that is disconnected from the others. Undirected means that there is no direction associated with an edge.

Trees introduce another set of terminology:

- The **root** of a tree is the start node for traversals. If the tree has a root, it is called a **rooted tree**.
- A **branch** is a path from the root to an end point. The end point is called a **leaf**.
- The **height** of a tree is equal to the **number of edges that connect** the root node to the leaf node that is furthest away from it (i.e. the longest branch).

The number of edges _**(E)**_ of a tree is equal to the number of nodes _**(N)**_ minus one, so _**E = N - 1**_.

![](https://isaaccomputerscience.org/api/v2.22.5/api/images/content/computer_science/data_structures_and_algorithms/data_structures/figures/isaac_cs_dsa_data_struct_tree_structure.png)

## Rooted Trees

A rooted tree is a tree with one node that has been designated as the root. Unlike real trees, when representing rooted trees in a diagram, the root is commonly situated above the other nodes and the branches descend to the leaf nodes.
