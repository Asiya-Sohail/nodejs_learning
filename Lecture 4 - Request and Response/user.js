const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit(); //Stop server

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter your Details</h1></body>')

    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your username"> <br />');
    res.write('<label for="gender">Gender : </label>');
    res.write('<input type="radio" id="male" name="gender" value="Male" />');
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="female" name="gender" value="Female" />');
    res.write('<label for="female">Female</label> <br><br>');

    res.write("<button type='submit'>Submit</button>")

    res.write('</form>');

    res.write('</html>');
    return res.end();
  } else if (req.url.toLowerCase() === '/submit-details' && req.method === 'POST') {
      fs.writeFileSync("user.txt", "Asiya");
      res.statusCode = 302;
      res.setHeader("Location", '/')
  }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Like / Share / Subscribe</h1></body>')
    res.write('</html>');
    return res.end();
})

const PORT = 3000
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`)
})