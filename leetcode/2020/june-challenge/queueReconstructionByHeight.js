const reconstructQueue = (people) => {
  const result = new Array(people.length);
  let start = 0;

  const findNewStart = () => {
    for (let i = start; i < result.length; i++) {
      if (result[i] === undefined) {
        start = i;
        break;
      }
    }
  };

  const insert = (person) => {
    let target = person[1];
    let index = start;

    while (target > 0) {
      index += 1;
      if (result[index] === undefined) target -= 1;
    }

    result[index] = person;
    findNewStart();
  };

  while (people.length > 0) {
    let selected = 0;
    for (let i = 1; i < people.length; i++) {
      if (
        people[i][0] < people[selected][0] ||
        (people[i][0] === people[selected][0] &&
          people[i][1] > people[selected][1])
      ) {
        selected = i;
      }
    }

    insert(people.splice(selected, 1)[0]);
  }

  return result;
};

const reconstructQueue = (people) => {
  const result = new Array(people.length);
  let start = 0;

  const findNewStart = () => {
    for (let i = start; i < result.length; i++) {
      if (result[i] === undefined) {
        start = i;
        break;
      }
    }
  };

  const insert = (person) => {
    let target = person[1];
    let index = start;

    while (target > 0) {
      index += 1;
      if (result[index] === undefined) target -= 1;
    }

    result[index] = person;
    findNewStart();
  };

  people.sort(([h1, k1], [h2, k2]) => {
    if (h1 === h2) {
      return k2 - k1;
    } else {
      return h1 - h2;
    }
  });

  people.forEach((p) => insert(p));

  return result;
};

const reconstructQueue = (people) => {
  const result = [];

  people.sort(([h1, k1], [h2, k2]) => {
    if (h1 === h2) {
      return k1 - k2;
    } else {
      return h2 - h1;
    }
  });

  people.forEach((p) => result.splice(p[1], 0, p));

  return result;
};

/*
[[7,1],[4,4],[6,6],[8,2],[3,4],[9,0],[10,0],[11,0],[12,0]]
[[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
[[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]
*/
