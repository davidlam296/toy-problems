// const findMinHeightTrees = (n, edges) => {
//   if (n === 1) return [0];

//   const graph = [];

//   for (let i = 0; i < n; i++) {
//     graph.push(new Set());
//   }

//   let result = [];
//   let minRows = Infinity;

//   for (const [a, b] of edges) {
//     graph[a].add(b);
//     graph[b].add(a);
//   }

//   const check = (queue, rows = 0, checked = new Set()) => {
//     if (rows > minRows) return -1;
//     if (checked.size === n) return rows;

//     const newQueue = new Set();

//     for (const num of queue) {
//       checked.add(num);

//       for (const edge of graph[num]) {
//         if (!checked.has(edge)) {
//           newQueue.add(edge);
//         }
//       }
//     }

//     return check(newQueue, rows + 1, checked);
//   }

//   for (let i = 0; i < n; i++) {
//     const outcome = check([i]);

//     if (outcome > 0) {
//       if (outcome < minRows) {
//         minRows = outcome;
//         result = [i];
//       } else {
//         result.push(i);
//       }
//     }
//   }

//   return result;
// };

const findMinHeightTrees = (n, edges) => {
  if (n === 1) return [0];

  const graph = [];

  for (let i = 0; i < n; i++) {
    graph.push(new Set());
  }

  for (const [a, b] of edges) {
    graph[a].add(b);
    graph[b].add(a);
  }

  let leaves = new Set();

  graph.map((edges, i) => edges.size === 1 && leaves.add(i));

  while (n > 2) {
    n = n - leaves.size;

    const newLeaves = new Set();

    for (const leaf of leaves) {
      for (const edge of graph[leaf]) {
        graph[edge].delete(leaf);
        graph[leaf].delete(edge);
        graph[edge].size === 1 && newLeaves.add(edge);
      }
    }

    leaves = newLeaves;
  }

  return [...leaves];
};
