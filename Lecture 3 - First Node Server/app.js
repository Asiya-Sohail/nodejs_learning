const http = require('http');
// function requestListener(req, res) {
//   console.log(req);
// }

// We passed reference only
// http.createServer(requestListener);
const server = http.createServer((req, res) => {
  console.log(req);
})
// For running (node app.js)

// server.listen(3000);
const PORT = 3000
server.listen(PORT, () => {
  console.log(`Server runnine on address http://localhost:${PORT}`)
})