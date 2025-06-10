const fs = require('fs');
const path = require('path');

function readFileContent() {
  const filePath = path.join(__dirname, 'files', 'file-data.txt');
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    console.log('Content of file-data.txt:\n', content);
  } catch (error) {
    console.error('Error reading file:', error.message);
  }
}

module.exports = { readFileContent };
