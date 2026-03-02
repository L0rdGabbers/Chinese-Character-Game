// convertDictionary.js
const fs = require('fs');

const lines = fs.readFileSync('dictionary.txt', 'utf8').trim().split('\n');

const arr = lines.map(line => JSON.parse(line));
fs.writeFileSync('dictionary.json', JSON.stringify(arr, null, 2));

console.log('Converted dictionary.json successfully!');