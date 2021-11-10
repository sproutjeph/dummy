//fs
const { readFile, writeFile } = require('fs');

// none blocking approch using call back fun
readFile('./content/first.txt', 'utf-8', (err, result) => {
  err ? console.log(err) : console.log(result);
});
