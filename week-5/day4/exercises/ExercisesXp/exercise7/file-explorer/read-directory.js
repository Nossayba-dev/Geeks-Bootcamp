const fs = require('fs');
const path = require('path');

const dirPath = __dirname; 

fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }
  console.log('Files in', dirPath, ':');
  files.forEach(file => console.log('-', file));
});
