const fs = require('fs');

const cups = fs
  .readFileSync(__dirname + '/23.txt', 'utf8')
  .split('')
  .map((n) => Number(n));

// Part 1 - brute Force

// const part1 = (cups, turns) => {
//   cups = cups.slice();

//   const findDest = (cups, target) => cups.indexOf(target);

//   let currCup = 0;

//   while (turns-- > 0) {
//     const STARTING_CUP = cups[currCup];
//     let destination = STARTING_CUP - 1 === 0 ? 9 : STARTING_CUP - 1;

//     const toPickUp =
//       currCup === cups.length - 1
//         ? [0, 1, 2]
//         : currCup === cups.length - 2
//         ? [8, 0, 1]
//         : currCup === cups.length - 3
//         ? [7, 8, 0]
//         : [currCup + 1, currCup + 2, currCup + 3];

//     const pickedUp = toPickUp.map((idx) => cups[idx]);

//     toPickUp.sort((a, b) => b - a).forEach((idx) => cups.splice(idx, 1));

//     while (pickedUp.includes(destination)) {
//       destination = destination === 1 ? 9 : destination - 1;
//     }

//     cups.splice(findDest(cups, destination) + 1, 0, ...pickedUp);

//     while (cups[currCup] !== STARTING_CUP) {
//       cups.push(cups.shift());
//     }

//     if (currCup + 1 === cups.length) currCup = 0;
//     else currCup++;
//   }

//   const indexOfOne = findDest(cups, 1);

//   return (
//     cups.slice(indexOfOne + 1).join('') + cups.slice(0, indexOfOne).join('')
//   );
// };

// Crab Cups

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

const crabCups = (cups, turns, p2 = false) => {
  const nodes = new Map();
  let head = null;
  let prev = null;

  cups.forEach((num) => {
    if (!head) {
      head = new Node(num);
      prev = head;
    } else {
      const node = new Node(num);
      prev.next = node;
      prev = node;
    }

    nodes.set(num, prev);
  });

  if (p2) {
    while (nodes.size < 1000000) {
      const VALUE = nodes.size + 1;
      const node = new Node(VALUE);

      prev.next = node;
      prev = node;

      nodes.set(VALUE, node);
    }
  }

  prev.next = head;

  const nextThree = (cup) => {
    const threeCups = [cup.next, cup.next.next, cup.next.next.next];

    return [[threeCups[0], threeCups[2]], new Set(threeCups.map((c) => c.val))];
  };

  let currCup = head;

  while (turns-- > 0) {
    const STARTING_VAL = currCup.val;
    const [[start, end], threeCups] = nextThree(currCup);

    let dest = STARTING_VAL - 1 === 0 ? nodes.size : STARTING_VAL - 1;

    while (threeCups.has(dest)) dest = dest - 1 === 0 ? nodes.size : dest - 1;

    const newLoc = nodes.get(dest);
    const tempNext = newLoc.next;

    currCup.next = end.next;
    newLoc.next = start;
    end.next = tempNext;

    currCup = currCup.next;
  }

  const start = nodes.get(1);

  if (p2) return start.next.val * start.next.next.val;
  else {
    let res = '';
    let head = start.next;

    while (true) {
      res += head.val;
      if (head.next.val === 1) break;
      else head = head.next;
    }

    return res;
  }
};

console.log(crabCups(cups, 100)); // Answer: 45983627
console.log(crabCups(cups, 10000000, true)); // Answer: 111080192688
