//fs

const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');

const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

// if the file is does not exist node will creat the file. result-sync.txt  if the file exist node will over wirte it.

// with this 3rd argument {flag:'a'} node will append
writeFileSync(
  './content/result-sync.txt',
  `here is the result: ${first}, ${second}`,
  { flag: 'a' }
);
