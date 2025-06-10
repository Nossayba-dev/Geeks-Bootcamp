const chalk = require('chalk');

function showColorfulMessage() {
  console.log(chalk.green.bold('This is a colorful message using chalk! '));
}

module.exports = { showColorfulMessage };
