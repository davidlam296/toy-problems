const isPalindrome = (s) => {
  const noCapsSpacesAndPunc = s
    .replace(/[.,?@\/#!$%\^&\*;:{}\[\]\'\"=\-_`~()]/g, '')
    .replace(/\s/g, '')
    .toLowerCase();

  return (
    noCapsSpacesAndPunc.split('').reverse().join('') === noCapsSpacesAndPunc
  );
};
