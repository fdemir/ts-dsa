# Graph

A graph is a non-linear data structure consisting of vertices (V) and edges (E).
A data type that can be used to represent complex, non-linear relationships
between objects.

![directed-undirected-graph](/assets/graph-un-directed.png)

### Terminology

_neighbours:_ when two nodes are connected by an edge _degree:_ the number of
edges connected to a node _loop:_ an edge that connects a node to itself _path:_
a sequence of nodes connected by edges _cycle:_ a path that starts and ends at
the same node((and no node is visited more than once))

### Undirected graphs

An undirected graph allows you to move (traverse) in either direction between
nodes. The edges are simple lines, not _arrows_.

### Directed Graphs

In directed graphs (also called digraphs), the edges have direction, which means
that you move between nodes in a specified direction

In the road map example, most roads will be bidirectional; however, there will
also be one-way streets. This affects our East Anglian transport system.

### Notes

implementation:

contains - It checks if a graph has a certain value. addNode - It adds vertices
to the graphs. removeNode - It removes the vertices from the graphs. hasEdge -
It checks if a path or a connection exists between any two vertices in a graph.
addEdge - It adds paths or links between vertices in graphs. removeEdge - It
removes the paths or connections between vertices in a graph.

edges = node - 1

G = (V,E)

DIRECTED & UNDIRECTED

Weighted

dircted: o -> o undirected: o - o

diff between tree-node: In tree, all nodes must be reachable from root. In
graph, there are no rules dictating how nodes are connected.

graph algo:

- bfs -> breadh first search
- dfs -> depth first search
- dijkstra -> shortest path
- bellman ford -> shortest path
- floyd warshall -> shortest path
- prim -> minimum spanning tree
- kruskal -> minimum spanning tree

### References

- [Isaac Computer Science - Graphs](https://www.cs.usfca.edu/~galles/visualization/Algorithms.html)
- [Isaac Computer Science - Graphs](https://isaaccomputerscience.org/concepts/dsa_datastruct_graph?examBoard=all&stage=all&topic=data_structures)
