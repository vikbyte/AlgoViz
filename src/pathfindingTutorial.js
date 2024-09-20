const pathData = [
  {
    title: "Dijkstra's Algorithm",
    list: [
      "The algorithm begins at the root node, where each node has a cost representing the distance traveled to reach that node.",
      "The root node always has a cost of zero, as it takes no distance to get there.",
      "Initially, all other nodes are assigned a cost of Infinity because their actual cost is unknown until they are reached. Some nodes might be unreachable.",
    ],
  },
  {
    title: "Dijkstra's Algorithm",
    list: [
      "Next, we visit each node connected to the root node, adding them to a priority queue. Once all connected nodes are added, we move to the next step.",
      "We then retrieve the first node from the priority queue, which is structured to always return the node with the smallest cost first.",
      "When the target node is reached, we backtrack through the previous nodes to construct the shortest path.",
    ],
  },
  {
    title: "A* Search",
    list: [
      "A* Search is an extension of Dijkstra's algorithm, with a few optimizations.",
      "A* Search has knowledge of the distance cost to the target node, making it faster than Dijkstra's algorithm as it searches more efficiently towards the target.",
      "The algorithm remains similar to Dijkstra's, but each node now includes an additional property: the estimated distance to the target node.",
    ],
  },
  {
    title: "A* Search",
    list: [
      "Like Dijkstra's algorithm, A* visits each node and adds it to a priority queue. The key difference is that the priority queue now favors nodes with the lowest combined cost of distance traveled + estimated distance to the target.",
      "This ensures that nodes farther from the target are penalized and deprioritized.",
    ],
  },
];

export default pathData;
