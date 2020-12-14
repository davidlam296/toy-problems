const findOrder = (numCourses, prerequisites) => {
  const reqs = new Map();

  for (let i = 0; i < numCourses; i++) {
    reqs.set(i, new Set());
  }

  for (const [course, req] of prerequisites) {
    reqs.get(course).add(req);
  }

  const taken = new Set();

  const takeCourse = (course, required = new Set()) => {
    if (taken.has(course)) return true;

    for (const req of reqs.get(course)) {
      if (required.has(req)) return false;
      else {
        if (!takeCourse(req, new Set([...required, course]))) return false;
      }
    }

    taken.add(course);
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!takeCourse(i)) break;
  }

  return taken.size === numCourses ? [...taken] : [];
};

const findOrder = (numCourses, prerequisites) => {
  const reqs = new Map();
  const taken = new Array(numCourses).fill(0);

  prerequisites.forEach(([course, req]) => {
    reqs.set(req, (reqs.get(req) || new Set()).add(course));
    taken[course]++;
  });

  const queue = [];
  const result = [];

  for (let i = 0; i < taken.length; i++) {
    if (taken[i] === 0) queue.push(i);
  }

  while (queue.length > 0) {
    const current = queue.shift();

    if (reqs.has(current)) {
      for (const course of reqs.get(current)) {
        taken[course]--;

        if (taken[course] === 0) queue.push(course);
      }
    }

    result.push(current);
  }

  return result.length === numCourses ? result : [];
};
