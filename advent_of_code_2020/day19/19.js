const fs = require('fs');
const data = fs.readFileSync(__dirname + '/19.txt', 'utf8').split('\n\n');

const ruleData = data[0]
  .split('\n')
  .map((rule) => rule.split(': '))
  .reduce((rules, [num, r]) => {
    rules[num] = r;
    return rules;
  }, {});

const msgs = data[1].split('\n');
const validAnswers = {};

// Monster Messages

const getValidAnswers = (ruleNumber) => {
  if (validAnswers[ruleNumber].possibilites)
    return validAnswers[ruleNumber].possibilites;

  const ruleSets = ruleData[ruleNumber].split(' | ').map((r) => r.split(' '));
  const finalMessages = new Set();

  for (const rules of ruleSets) {
    if (rules.includes(ruleNumber)) {
      let startingMessages = [''];
      let endingMessages = [''];
      let loopFound = false;

      for (const rule of rules) {
        if (rule === ruleNumber) {
          loopFound = true;
          continue;
        } else if (!loopFound) {
          const updatedMessages = [];

          const messagePieces = validAnswers[rule].possibilites
            ? validAnswers[rule].possibilites
            : getValidAnswers(rule);

          for (const mp of messagePieces) {
            for (const m of startingMessages) {
              updatedMessages.push(m + mp);
            }
          }

          startingMessages = updatedMessages;
        } else {
          const updatedMessages = [];

          const messagePieces = validAnswers[rule].possibilites
            ? validAnswers[rule].possibilites
            : getValidAnswers(rule);

          for (const mp of messagePieces) {
            for (const m of endingMessages) {
              updatedMessages.push(m + mp);
            }
          }

          endingMessages = updatedMessages;
        }
      }

      validAnswers[ruleNumber].startsWith = new Set(startingMessages);
      validAnswers[ruleNumber].endsWith = new Set(endingMessages);
      validAnswers[ruleNumber].startLength = startingMessages[0].length;
      validAnswers[ruleNumber].endLength = endingMessages[0].length;

      // Attempted to add all possibilties, but ran out of memory after 1 cycle
      // Code can be less verbose
      let numCycles = 1;
      let possibilites = [''];

      for (let i = 0; i < numCycles; i++) {
        let newList = [];

        for (const p of possibilites) {
          for (const sm of startingMessages) {
            newList.push(p + sm);
          }
        }

        possibilites = newList;
      }

      for (let i = 0; i < numCycles; i++) {
        let newList = [];

        for (const p of possibilites) {
          for (const em of endingMessages) {
            newList.push(p + em);
          }
        }

        possibilites = newList;
      }

      possibilites.forEach((m) => finalMessages.add(m));
    } else {
      let messages = [''];

      for (const rule of rules) {
        const updatedMessages = [];

        const messagePieces = validAnswers[rule].possibilites
          ? validAnswers[rule].possibilites
          : getValidAnswers(rule);

        for (const mp of messagePieces) {
          for (const m of messages) {
            updatedMessages.push(m + mp);
          }
        }

        messages = updatedMessages;
      }

      messages.forEach((m) => finalMessages.add(m));
    }
  }

  validAnswers[ruleNumber].possibilites = finalMessages;
  return validAnswers[ruleNumber].possibilites;
};

for (const ruleNum in ruleData) {
  validAnswers[ruleNum] = {};
  if (ruleData[ruleNum].includes('"')) {
    validAnswers[ruleNum].possibilites = new Set(ruleData[ruleNum].charAt(1));
  }
}

for (const ruleNum in ruleData) {
  getValidAnswers(ruleNum);
}

const validate = (m, rn) => {
  const [rule1, rule2] = ruleData[rn].split(' ');
  const [r1Start, r1End] = [
    validAnswers[rule1].startLength,
    validAnswers[rule1].endLength,
  ];
  const [r2Start, r2End] = [
    validAnswers[rule2].startLength,
    validAnswers[rule2].endLength,
  ];
  const RULE1_SIZE = r1Start + r1End;
  const RULE2_SIZE = r2Start + r2End;

  const verify = (str, r) => {
    const size = r === 1 ? RULE1_SIZE : RULE2_SIZE;
    const rule = r === 1 ? rule1 : rule2;

    if (str.length % size !== 0) return false;

    const loops = str.length / size;

    let startIndex = 0;
    let endIndex = validAnswers[rule].startLength;
    let startLoops = loops;

    // Can proably use String.prototype.startsWith and String.prototype.endsWith functions
    // while (startIndex < endIndex) {
    //   const strToCheck = str.slice(startIndex, endIndex);

    //   if (!validAnswers[rule].startsWith.has(strToCheck)) return false;
    //   if (!validAnswers[rule].endsWith.has(strToCheck)) return false;

    // }

    while (startLoops > 0) {
      const strToCheck = str.slice(startIndex, endIndex);

      if (!validAnswers[rule].startsWith.has(strToCheck)) return false;

      startIndex += validAnswers[rule].startLength;
      endIndex += validAnswers[rule].startLength;
      startLoops--;
    }

    if (validAnswers[rule].endLength > 0) {
      let esIndex = startIndex;
      let eeIndex = startIndex + validAnswers[rule].endLength;
      let endLoops = loops;

      while (endLoops > 0) {
        const strToCheck = str.slice(esIndex, eeIndex);

        if (!validAnswers[rule].endsWith.has(strToCheck)) return false;

        esIndex += validAnswers[rule].endLength;
        eeIndex += validAnswers[rule].endLength;

        endLoops--;
      }
    }

    return true;
  };

  let cutoff = RULE1_SIZE;

  while (m.length - cutoff >= RULE2_SIZE) {
    const rule1Str = m.substr(0, cutoff);
    const rule2Str = m.substr(cutoff);

    if (verify(rule1Str, 1) && verify(rule2Str, 2)) return true;

    cutoff += RULE1_SIZE;
  }

  return false;
};

const checkRules = (msgs, ruleNumber) => {
  let count = 0;

  for (const msg of msgs) {
    if (validAnswers[ruleNumber].possibilites.has(msg)) count++;
    else if (validate(msg, ruleNumber)) count++;
  }

  return count;
};

console.log(checkRules(msgs, 0)); // Part 1 - Answer: 136; Part 2 - Answer: 256
