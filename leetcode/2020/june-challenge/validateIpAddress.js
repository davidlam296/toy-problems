const validIPAddress = (IP) => {
  const isIp4 = () => {
    const segments = IP.split('.');
    if (segments.length !== 4) return false;

    for (const piece of segments) {
      if (piece.length > 3) return false;
      if (piece === '') return false;
      if (piece.length > 1 && piece.charAt(0) === '0') return false;
      if (Number(piece) > 255) return false;

      for (const char of piece) {
        if (isNaN(char)) return false;
      }
    }
    return true;
  };

  const isIp6 = () => {
    const VALID_LETTERS = new Set([
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
    ]);
    const segments = IP.split(':');
    if (segments.length !== 8) return false;

    for (const piece of segments) {
      if (piece.length > 4) return false;
      if (piece === '') return false;

      for (const char of piece) {
        if (isNaN(char) && !VALID_LETTERS.has(char)) return false;
      }
    }
    return true;
  };

  return isIp4() ? 'IPv4' : isIp6() ? 'IPv6' : 'Neither';
};
