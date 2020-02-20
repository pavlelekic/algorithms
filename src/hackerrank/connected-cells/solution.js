const fs = require('fs');

const content = fs.readFileSync(`${process.cwd()}/matrix-input.txt`).toString();

console.log(content);