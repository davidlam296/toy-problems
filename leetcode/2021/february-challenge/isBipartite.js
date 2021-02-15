const isBipartite = (graph) => {
  const A = new Set();
  const B = new Set();
  const visited = new Set();
  const queue = [0];

  A.add(0);

  let next = 1;

  while (visited.size < graph.length) {
    if (queue.length === 0) {
      while (next < graph.length) {
        if (!visited.has(next)) {
          queue.push(next);
          next++;
          break;
        }

        next++;
      }
    }

    const index = queue.shift();

    if (visited.has(index)) continue;

    visited.add(index);

    const currSet = A.has(index) ? A : B;
    const otherSet = currSet === A ? B : A;
    const edges = graph[index];

    for (const edge of edges) {
      if (currSet.has(edge)) return false;

      otherSet.add(edge);
      queue.push(edge);
    }
  }

  return true;
};
