const fs = require('fs');

function readFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading ${filePath}:`, err);
    } else {
      console.log(`Content of ${filePath}:`);
      console.log(data);
    }
  });
}

function writeFile(filePath, content) {
  fs.writeFile(filePath, content, 'utf8', err => {
    if (err) {
      console.error(`Error writing to ${filePath}:`, err);
    } else {
      console.log(`Successfully wrote to ${filePath}`);
    }
  });
}

module.exports = {
  readFile,
  writeFile
};
