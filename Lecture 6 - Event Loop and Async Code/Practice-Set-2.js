// Event Loop Sequence
console.log("1. Start of Sequence");

// Microtask doesn't come in Event List Queue, It comes in Microtask Queue
// That queue has higher priority then Event list Queue
Promise.resolve().then(() => {
  console.log("2. MicroTask Queue")
})

// Timer Queue
setTimeout(() => {
  console.log("3. Timer 1");
}, 0);

// I/O Queue
const fs = require('fs')
fs.readFile('user.txt', 'utf8', (err, dataAsync) => {
  if (err) throw err;
  console.log("4. I/O Operations");
})

// Check Queue
setImmediate(() => {
  console.log("5. Immediate 1");
})

// Close Queue
process.on('exit', (code) => {
  console.log("6. Exit Event");
})

console.log("7. End of Script");
