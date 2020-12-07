const fs = require('fs');

const rawData = fs.readFileSync(__dirname + '/7.txt', 'utf8').split('\n');

const bagGraph = rawData.reduce((bags, row) => {
  const [container, contents] = row.split(' contain ');

  bags[container] =
    contents === 'no other bags.'
      ? {}
      : contents
          .substr(0, contents.length - 1)
          .split(', ')
          .reduce((contains, content) => {
            const splitIdx = content.indexOf(' ');
            const bagType = content.substr(splitIdx + 1);
            const count = Number(content.substr(0, splitIdx));

            contains[count > 1 ? bagType : `${bagType}s`] = count;

            return contains;
          }, {});

  return bags;
}, {});

const part1 = (graph, target) => {
  const valid = new Set();

  const searchBag = (bagType, searchedBags = new Set()) => {
    if (searchedBags.has(bagType)) return;

    if (valid.has(bagType) || bagType === target) {
      for (const type of searchedBags) valid.add(type);
      return;
    }

    for (const edgeBag in graph[bagType]) {
      searchBag(edgeBag, new Set([...searchedBags, bagType]));
    }
  };

  for (const bagType in graph) {
    if (Object.keys(graph[bagType]).length !== 0 || !valid.has(bagType))
      searchBag(bagType);
  }

  return valid.size;
};

const part2 = (graph, target) => {
  const digBag = (bagType) => {
    let count = 1;

    for (const bag in graph[bagType]) {
      count += graph[bagType][bag] * digBag(bag, graph[bagType][bag]);
    }

    return count;
  };

  return digBag(target) - 1;
};

console.log(part1(bagGraph, 'shiny gold bags')); // Answer: 268
console.log(part2(bagGraph, 'shiny gold bags')); // Answer: 7867
