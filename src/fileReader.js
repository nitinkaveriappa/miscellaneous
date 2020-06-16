const fs = require('fs');
const readline = require('readline');

// File Reader function to read file line by line
// Arguments filename and processLine function
const fileReader = async (filename, processLine) => {
  const fileStream = fs.createReadStream(filename);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    processLine(line);
  }
};

module.exports = fileReader;
