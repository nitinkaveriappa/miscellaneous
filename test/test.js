const {
  getRandomIntInclusive,
  getSecureRandomNumber,
} = require('../src/getRandomNumber');

describe('Test getRandomNumber', () => {
  test('getRandomIntInclusive function', () => {
    const min = 1,
      max = 6;
    const a = getRandomIntInclusive(min, max);
    expect(a).toBeGreaterThanOrEqual(min);
    expect(a).toBeLessThanOrEqual(max);
  });
});

describe('Test getRandomNumber', () => {
  test('getSecureRandomNumber function', () => {
    const a = getSecureRandomNumber(),
      b = getSecureRandomNumber();
    console.log({ a, b });
    expect(a).not.toBe(b);
  });
});
