const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

const getSecureRandomNumber = () => {
  const array = new Uint32Array(1);
  return window.crypto.getRandomValues(array);
};

module.exports = { getRandomIntInclusive, getSecureRandomNumber };
