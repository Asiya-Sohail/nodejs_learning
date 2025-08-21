// Blocking vs Async
const fs = require('fs')
console.log("1. Start of Script");
console.log("2. Reading File Synchronously");
const dataSync = fs.readFileSync('user.txt', 'utf8');
console.log("3. Syncrounous Read Complete");

fs.readFile('user.txt', 'utf8', (err, dataAsync) => {
  if (err) throw err;
  console.log("6. Asynchronous Read Complete");
})

console.log("5. End of Script");



