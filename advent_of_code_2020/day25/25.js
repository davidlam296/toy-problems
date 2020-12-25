const fs = require('fs');

const [cardKey, doorKey] = fs
  .readFileSync(__dirname + '/25.txt', 'utf8')
  .split('\n')
  .map((n) => Number(n));

// Combo Breaker

const generateSecretLoops = (subjectNumber, target1, target2) => {
  let t1Loops, t2Loops;
  let loopCount = 1,
    key = 1;

  while (!t1Loops || !t2Loops) {
    key *= subjectNumber;
    key %= 20201227;

    if (!t1Loops && key === target1) t1Loops = loopCount;
    if (!t2Loops && key === target2) t2Loops = loopCount;
    loopCount++;
  }

  return [t1Loops, t2Loops];
};

const generateEncryptionKey = (subjectNumber, loops) => {
  let secretKey = 1;

  while (loops-- > 0) {
    secretKey *= subjectNumber;
    secretKey %= 20201227;
  }

  return secretKey;
};

const part1 = (ck, dk) => {
  const [cardLoops, doorLoops] = generateSecretLoops(7, ck, dk);

  if (cardLoops > doorLoops) return generateEncryptionKey(ck, doorLoops);
  else return generateEncryptionKey(dk, cardLoops);
};

console.log(part1(cardKey, doorKey)); // Answer: 42668
