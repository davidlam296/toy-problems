// const reachNumber = target => {
//   target = Math.abs(target)

//   let turns = 0;

//   while (target > 0) {
//     target -= ++turns;
//   }

//   return target % 2 === 0 ? turns : turns + 1 + turns % 2;
// };

const reachNumber = (target) => {
  target = Math.abs(target);

  if (target === 1) return 1;

  const minTurns = Math.round(Math.sqrt(target * 2));
  const diff = ((minTurns + 1) * minTurns) / 2 - target;

  return diff % 2 === 0 ? minTurns : minTurns + 1 + (minTurns % 2);
};
