const fileReader = require('./src/fileReader');

const wordMap = new Map();

const processLine = (line) => {
  wordMap.set(line, 1);
};

const main = async () => {
  await fileReader('./resources/words_alpha.txt', processLine);

  console.log(wordMap.has('ironic'));
};

main();
