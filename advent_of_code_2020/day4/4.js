const fs = require('fs');

const rawData = fs.readFileSync(__dirname + '/4.txt', 'utf8').split('\n');
const passports = [];

let prevEmpty = false;
let currPassport = {};

rawData.forEach((row) => {
  if (prevEmpty) {
    passports.push(currPassport);
    currPassport = {};
    prevEmpty = false;
  }

  if (row !== '') {
    row.split(' ').forEach((pair) => {
      const [key, val] = pair.split(':');

      if (key === 'byr' || key === 'iyr' || key === 'eyr')
        currPassport[key] = Number(val);
      else currPassport[key] = val;
    });
  } else {
    prevEmpty = true;
  }
});

passports.push(currPassport);

// Passport Processing

// byr (Birth Year)
// iyr (Issue Year)
// eyr (Expiration Year)
// hgt (Height)
// hcl (Hair Color)
// ecl (Eye Color)
// pid (Passport ID)
// cid (Country ID)

const part1 = (passports) => {
  let count = 0;

  for (const p of passports) {
    if (!p.byr || !p.iyr || !p.eyr || !p.hgt || !p.hcl || !p.ecl || !p.pid)
      continue;
    count++;
  }

  return count;
};

const part2 = (passports) => {
  let count = 0;

  const COLORS = new Set(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']);

  for (const p of passports) {
    if (
      p.byr &&
      p.byr >= 1920 &&
      p.byr <= 2002 &&
      p.iyr &&
      p.iyr >= 2010 &&
      p.iyr <= 2020 &&
      p.eyr &&
      p.eyr >= 2020 &&
      p.eyr <= 2030 &&
      p.hgt &&
      ((p.hgt.includes('cm') &&
        Number(p.hgt.split('cm')[0]) >= 150 &&
        Number(p.hgt.split('cm')[0]) <= 193) ||
        (p.hgt.includes('in') &&
          Number(p.hgt.split('in')[0]) >= 59 &&
          Number(p.hgt.split('in')[0]) <= 76)) &&
      p.hcl &&
      p.hcl.match(/^#[0-9a-f]{6}/i) &&
      p.ecl &&
      COLORS.has(p.ecl) &&
      p.pid &&
      p.pid.match(/^[0-9]{9}$/g)
    )
      count++;
  }

  return count;
};

console.log(part1(passports)); // Answer: 219
console.log(part2(passports)); // Answer: 127
