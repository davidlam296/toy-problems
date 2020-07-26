const allPathsSourceTarget = (graph) => {
  const result = [];

  const findPaths = (index, path = []) => {
    if (index === graph.length - 1) result.push([...path, index]);

    for (const dest of graph[index]) {
      findPaths(dest, [...path, index]);
    }
  };

  findPaths(0);

  return result;
};

const allPathsSourceTarget = (graph) => {
  const result = [];
  const END = graph.length - 1;

  const findPaths = (index, path = []) => {
    if (index === END) result.push([...path, index]);
    graph[index].forEach((dest) => findPaths(dest, [...path, index]));
  };

  findPaths(0);

  return result;
};
