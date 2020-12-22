const { pbkdf2 } = require('crypto');
const fs = require('fs');

const hands = fs
  .readFileSync(__dirname + '/22.txt', 'utf8')
  .split('\n\n')
  .reduce((hands, hand) => {
    const cards = hand.split('\n');
    const player = cards.shift().slice(0, -1);

    hands[player] = cards.map((n) => Number(n));

    return hands;
  }, {});

// Crab Combat

const calcScore = (hand) =>
  hand.reduce((score, card, index) => score + (hand.length - index) * card, 0);

const part1 = (hands) => {
  let p1Hand = hands['Player 1'].slice();
  let p2Hand = hands['Player 2'].slice();

  // Unnecessary variable, but wanted to keep track
  let roundCount = 0;

  while (p1Hand.length > 0 && p2Hand.length > 0) {
    const p1Card = p1Hand.shift();
    const p2Card = p2Hand.shift();

    if (p1Card > p2Card) p1Hand.push(p1Card, p2Card);
    else p2Hand.push(p2Card, p1Card);
    roundCount++;
  }

  return p1Hand.length > p2Hand.length ? calcScore(p1Hand) : calcScore(p2Hand);
};

const part2 = (hands) => {
  const p1Hand = hands['Player 1'].slice();
  const p2Hand = hands['Player 2'].slice();

  // Unnecessary, but wanted to know...
  let gameCount = 1;

  const recursiveCombat = (hand1, hand2, gameNumber) => {
    const gameMem = new Set();

    while (hand1.length > 0 && hand2.length > 0) {
      const gameID = `${JSON.stringify(hand1)}-${JSON.stringify(hand2)}`;

      if (gameMem.has(gameID)) return 'p1';

      gameMem.add(gameID);

      const p1Card = hand1.shift();
      const p2Card = hand2.shift();

      if (hand1.length >= p1Card && hand2.length >= p2Card) {
        recursiveCombat(
          hand1.slice(0, p1Card),
          hand2.slice(0, p2Card),
          gameCount++
        ) === 'p1'
          ? hand1.push(p1Card, p2Card)
          : hand2.push(p2Card, p1Card);
      } else {
        if (p1Card > p2Card) hand1.push(p1Card, p2Card);
        else hand2.push(p2Card, p1Card);
      }
    }

    return hand1.length > 0 ? 'p1' : 'p2';
  };

  const winner = recursiveCombat(p1Hand, p2Hand, gameCount++);

  return winner === 'p1' ? calcScore(p1Hand) : calcScore(p2Hand);
};

console.log(part1(hands)); // Answer: 32495
console.log(part2(hands)); // Answer: 32665
