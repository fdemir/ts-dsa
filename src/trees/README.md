# Trees

A tree is a connected, undirected graph with no cycles. Recall that a cycle is a path that starts and ends at the same node. In a tree, there are no cycles, which means that there is only one possible path between any two nodes. Connected means that there is a path from any node to any other node, and there is no node, or set of nodes, that is disconnected from the others. Undirected means that there is no direction associated with an edge.

Trees introduce another set of terminology:

- The **root** of a tree is the start node for traversals. If the tree has a root, it is called a **rooted tree**.
- A **branch** is a path from the root to an end point. The end point is called a **leaf**.
- The **height** of a tree is equal to the **number of edges that connect** the root node to the leaf node that is furthest away from it (i.e. the longest branch).

The number of edges _**(E)**_ of a tree is equal to the number of nodes _**(N)**_ minus one, so _**E = N - 1**_.

![](https://isaaccomputerscience.org/api/v2.22.5/api/images/content/computer_science/data_structures_and_algorithms/data_structures/figures/isaac_cs_dsa_data_struct_tree_structure.png)

## Rooted trees

A rooted tree is a tree with one node that has been designated as the root. Unlike real trees, when representing rooted trees in a diagram, the root is commonly situated above the other nodes and the branches descend to the leaf nodes.

![](https://isaaccomputerscience.org/api/v2.22.5/api/images/content/computer_science/data_structures_and_algorithms/data_structures/figures/isaac_cs_dsa_data_struct_rooted_tree.png)

In a rooted tree, the nodes are connected by parent–child relationships. If you mark a path from the root towards a node, a **parent** node is a node that comes directly before another adjacent node, which is considered its child. A node can have any number of children. A **leaf** is a node with no children. In the diagram above, the node marked _12_ is the parent of the nodes marked _2_ and _11_. The node marked _5_ is a leaf node.

It follows that the root is the only node with no parent, and all other nodes are descendants of the root.

## Binary trees

A **binary tree** is a rooted tree where every node has at most two child nodes, which are referred to as the left child and the right child.  
![](https://isaaccomputerscience.org/api/v2.22.5/api/images/content/computer_science/data_structures_and_algorithms/data_structures/figures/isaac_cs_dsa_data_struct_annotated_binary_tree.png)

## What is difference between graphs and trees?

A graph is a set of vertices/nodes and edges. A tree is a set of nodes and edges. In the graph, there is no unique node which is known as root. In a tree, there is a unique node which is known as root.

## Uses for trees?

There are many types of tree, and each has its own purpose. Here are three common examples:

- Binary trees are used in compilers to build syntax trees, and are used within routers to store routing tables
- Binary search trees can be built to speed up searching
- Expression trees can be used to represent algebraic and Boolean expressions in a way that simplifies the processing of the expression

### Notes and References

- [Radix Tree](https://en.wikipedia.org/wiki/Radix_tree)
- [Binary Search Tree](https://en.wikipedia.org/wiki/Binary_search_tree)
