const fs = require('fs');

const directions = fs
  .readFileSync(__dirname + '/12.txt', 'utf8')
  .split('\n')
  .map((direction) => [direction[0], Number(direction.slice(1))]);

// Rain Risk

const part1 = (directions) => {
  const CARDINALS = ['E', 'S', 'W', 'N'];
  let facing = 0;
  let vert = 0;
  let hori = 0;

  const changeDirection = (degrees, dir) => {
    let numTurns = degrees / 90;

    while (numTurns > 0) {
      facing += dir === 'R' ? 1 : -1;

      if (facing > 3) facing = 0;
      if (facing < 0) facing = 3;

      numTurns--;
    }
  };

  const moveForward = (distance) => {
    if (facing % 2 === 0) {
      hori += facing === 0 ? distance : -distance;
    } else {
      vert += facing === 1 ? -distance : distance;
    }
  };

  const moveDir = (distance, dir) => {
    if (CARDINALS.indexOf(dir) % 2 === 0) {
      hori += dir === 'E' ? distance : -distance;
    } else {
      vert += dir === 'N' ? distance : -distance;
    }
  };

  for (const [move, dist] of directions) {
    if (move === 'F') {
      moveForward(dist);
    } else if (move === 'R' || move === 'L') {
      changeDirection(dist, move);
    } else {
      moveDir(dist, move);
    }
  }

  return Math.abs(vert) + Math.abs(hori);
};

const part2 = (directions) => {
  const CARDINALS = ['E', 'S', 'W', 'N', 'E', 'S'];
  let [way1, way2] = [0, 3];
  let [multi1, multi2] = [10, 1];

  let vert = 0;
  let hori = 0;

  const changeDirection = (degrees, dir) => {
    let numTurns = degrees / 90;

    while (numTurns > 0) {
      way1 += dir === 'R' ? 1 : -1;
      way2 += dir === 'R' ? 1 : -1;

      if (way1 > 3) way1 = 0;
      if (way2 > 3) way2 = 0;
      if (way1 < 0) way1 = 3;
      if (way2 < 0) way2 = 3;

      numTurns--;
    }
  };

  const moveForward = (direction, waypointMultiplier, multiplier) => {
    const totalMove = waypointMultiplier * multiplier;

    if (direction % 2 === 0) hori += direction === 0 ? totalMove : -totalMove;
    else vert += direction === 1 ? -totalMove : totalMove;
  };

  const moveWaypoint = (amount, dir) => {
    if (CARDINALS[way1] === dir) {
      multi1 += amount;
    } else if (CARDINALS[way1 + 2] === dir) {
      multi1 -= amount;
      if (multi1 < 0) {
        multi1 = Math.abs(multi1);
        way1 += way1 > 1 ? -2 : 2;
      }
    } else if (CARDINALS[way2] === dir) {
      multi2 += amount;
    } else {
      multi2 -= amount;
      if (multi2 < 0) {
        multi2 = Math.abs(multi2);
        way2 += way2 > 1 ? -2 : 2;
      }
    }
  };

  for (const [move, dist] of directions) {
    // console.log(`The ship is facing : ${CARDINALS[way1]} & ${CARDINALS[way2]}`);
    // console.log(`The waypoint distances are ${multi1} & ${multi2}`);
    // console.log(`This ship is located at vert: ${vert} & hori: ${hori}`);

    if (move === 'F') {
      moveForward(way1, multi1, dist);
      moveForward(way2, multi2, dist);
    } else if (move === 'R' || move === 'L') {
      changeDirection(dist, move);
    } else {
      moveWaypoint(dist, move);
    }
  }

  return Math.abs(vert) + Math.abs(hori);
};

console.log(part1(directions)); // Answer: 2057
console.log(part2(directions)); // Answer: 71504
