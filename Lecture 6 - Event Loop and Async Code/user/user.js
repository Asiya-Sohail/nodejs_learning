const fs = require('fs');

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);
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
    const body = []
      req.on("data", (chunk) => {
        console.log(chunk)
        body.push(chunk)
      })

      req.on('end', () => {
        const fullBody = Buffer.concat(body).toString();
        console.log(fullBody);
        // Decode
        const params = new URLSearchParams(fullBody);
        // const bodyObject = {};
        // for (const [key, value] of params.entries()) {
        //   bodyObject[key] = value
        // }
        bodyObject = Object.fromEntries(params);
        console.log(bodyObject);
        // fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
        fs.writeFile("user.txt", JSON.stringify(bodyObject), error => {
          console.log("Written File Successfully");
        });
        // It should be inside 
        res.statusCode = 302;
      res.setHeader("Location", '/')
      return res.end();
      })
  } else {
  // 1st way, write this in Else
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Like / Share / Subscribe</h1></body>')
    res.write('</html>');
    return res.end();
  }
}

module.exports = userRequestHandler;