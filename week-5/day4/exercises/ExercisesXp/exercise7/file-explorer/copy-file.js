const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'source.txt');
const destPath = path.join(__dirname, 'destination.txt');

fs.readFile(srcPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading source.txt:', err);
    return;
  }
  fs.writeFile(destPath, data, 'utf8', err => {
    if (err) {
      console.error('Error writing destination.txt:', err);
    } else {
      console.log('File copied to destination.txt');
    }
  });
  });
