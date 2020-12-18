const fs = require('fs');

const equations = fs.readFileSync(__dirname + '/18.txt', 'utf8').split('\n');

// Operation Order

const evaluateOne = (equation) => {
  let sum = 0;
  let start = 0;
  let end = equation.length;
  let eval = '+';

  while (start < end) {
    const num = equation[start];

    if (num.includes('(')) {
      let leftCount = 0;

      for (const char of num) {
        if (char === '(') leftCount++;
      }

      for (let i = start + 1; i < end; i++) {
        const expression = equation[i];

        for (const char of expression) {
          if (char === '(') leftCount++;
          if (char === ')') leftCount--;
        }

        if (leftCount === 0) {
          const partialEquation = equation.slice(start, i + 1);
          partialEquation[0] = partialEquation[0].substr(1);
          partialEquation[partialEquation.length - 1] = partialEquation[
            partialEquation.length - 1
          ].slice(0, -1);

          const parenValue = evaluateOne(partialEquation);

          sum = eval === '+' ? sum + parenValue : sum * parenValue;
          start = i + 1;
          break;
        }
      }
    } else if (num === '+' || num === '*') {
      eval = num;
      start++;
    } else {
      sum = eval === '+' ? sum + Number(num) : sum * Number(num);
      start++;
    }
  }

  return sum;
};

const evaluateTwo = (equation) => {
  const copy = equation.slice();

  // Clear our parens
  const clearParens = () => {
    let start = 0;

    while (start < copy.length) {
      const phrase = copy[start];

      if (phrase.includes('(')) {
        let leftCount = 0;

        for (const char of phrase) {
          if (char === '(') leftCount++;
        }

        for (let i = start + 1; i < copy.length; i++) {
          const expression = copy[i];

          for (const char of expression) {
            if (char === '(') leftCount++;
            if (char === ')') leftCount--;
          }

          if (leftCount === 0) {
            const partialEquation = copy.slice(start, i + 1);
            partialEquation[0] = partialEquation[0].substr(1);
            partialEquation[partialEquation.length - 1] = partialEquation[
              partialEquation.length - 1
            ].slice(0, -1);

            const parenValue = evaluateTwo(partialEquation).toString();

            copy.splice(start, i + 1 - start, parenValue);
            break;
          }
        }
      }

      start++;
    }
  };

  clearParens();

  // Add
  const add = () => {
    let start = 1;
    let prev = Number(copy[0]);
    let add = false;

    while (start < copy.length) {
      if (copy[start] === '+') add = true;
      else if (add) {
        const added = Number(copy[start]) + prev;
        copy.splice(start - 2, 3, added.toString());
        prev = added;
        start -= 3;
        add = false;
      } else {
        prev = Number(copy[start]);
      }

      start++;
    }
  };

  add();

  // Multiply
  return copy
    .filter((p) => p !== '*')
    .reduce((acc, num) => acc * Number(num), 1);
};

const part1 = (equations) => {
  let result = 0;

  for (const equation of equations) {
    const res = evaluateOne(equation.split(' '));
    result += res;
  }

  return result;
};

const part2 = (equations) => {
  let result = 0;

  for (const equation of equations) {
    const res = evaluateTwo(equation.split(' '));
    result += res;
  }

  return result;
};

console.log(part1(equations)); // Answer: 800602729153
console.log(part2(equations)); // Answer: 92173009047076
