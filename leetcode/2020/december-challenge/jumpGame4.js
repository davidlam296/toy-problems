// const minJumps = arr => {
//   if (arr.length === 1) return 0;
//   if (arr.length === 2) return 1;

//   const res = new Array(arr.length).fill(0);
//   const map = arr.reduce((map, num, idx) => {
//     if (!map[num]) map[num] = [idx];
//     else map[num].push(idx);

//     return map;
//   }, {});

//   let queue = [arr.length - 1];
//   let turn = 1;

//   while (res[0] === 0) {
//     const newQueue = [];

//     for (const index of queue) {
//       const num = arr[index];

//       for (const oIdx of map[num]) {
//         if (res[oIdx] === 0) {
//           res[oIdx] = turn;

//           newQueue.push(oIdx);
//         }
//       }

//       if (index + 1 < arr.length && res[index + 1] === 0) {
//         res[index + 1] = turn;
//         newQueue.push(index + 1);
//       }

//       if (index - 1 >= 0 && res[index - 1] === 0) {
//         res[index - 1] = turn;
//         newQueue.push(index - 1);
//       }
//     }

//     turn++;
//     queue = newQueue;
//   }

//   return res[0];
// };

const minJumps = (arr) => {
  if (arr.length === 1) return 0;
  if (arr.length === 2) return 1;

  const res = new Array(arr.length).fill(0);
  const map = arr.reduce((map, num, idx) => {
    if (!map.has(num)) map.set(num, new Set([idx]));
    else map.get(num).add(idx);

    return map;
  }, new Map());

  const checked = new Set();
  let queue = new Set([arr.length - 1]);
  let turn = 1;

  while (res[0] === 0) {
    const newQueue = new Set();

    for (const index of queue) {
      const num = arr[index];

      if (index + 1 < arr.length && res[index + 1] === 0) {
        res[index + 1] = turn;
        newQueue.add(index + 1);
      }

      if (index - 1 >= 0 && res[index - 1] === 0) {
        res[index - 1] = turn;
        newQueue.add(index - 1);
      }

      if (checked.has(num)) continue;
      checked.add(num);

      for (const oIdx of map.get(num)) {
        if (res[oIdx] === 0) {
          res[oIdx] = turn;

          newQueue.add(oIdx);
        }
      }
    }

    turn++;
    queue = newQueue;
  }

  return res[0];
};
