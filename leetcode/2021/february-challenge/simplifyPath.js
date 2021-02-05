const simplifyPath = (path) => {
  const directory = [];

  path = path.split('/');

  for (const dir of path) {
    if (dir === '..') {
      if (path.length > 0) directory.pop();
    } else if (dir === '.' || dir === '') {
      continue;
    } else {
      directory.push(dir);
    }
  }

  return '/' + directory.join('/');
};
