const fs = require('fs');

const groups = fs
  .readFileSync(__dirname + '/6.txt', 'utf8')
  .split('\n\n')
  .map((group) => group.split('\n'));

const part1 = (groups) =>
  groups.reduce((count, group) => {
    const chars = new Set();

    group.forEach((person) => {
      for (const answer of person) {
        chars.add(answer);
      }
    });

    return count + chars.size;
  }, 0);

const part2 = (groups) =>
  groups.reduce((count, group) => {
    if (group.length === 1) return count + group[0].length;
    else {
      group.sort((a, b) => b.length - a.length);

      const chars = new Set(group.pop().split(''));

      for (const char of chars) {
        for (const person of group) {
          if (!person.includes(char)) {
            chars.delete(char);
            break;
          }
        }
      }

      return count + chars.size;
    }
  }, 0);

console.log(part1(groups)); // Answer: 6351
console.log(part2(groups)); // Answer: 3143
