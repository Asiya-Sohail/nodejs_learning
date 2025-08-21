const {addRequestHandler} = require('./add')

const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>Calculator</title>  
        </head>
        <body>
          <h1>Welcome to the Calculator</h1>
          <a href="./calculator">Calculate Please</a>
        </body>
      </html>
      `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>Calculator</title>
        </head>
        <body>
          <form action="/calculate-result" method="POST">
            <label for="Number_1">Number 1 : </label>
            <input type="number" name="Number_1" id="Number_1"/> 
            <br />
            <label for="Number_2">Number 2 : </label>
            <input type="number" name="Number_2" id="Number_2"/> 
            <br />
            <button type="submit">Sum</button>
          </form>
        </body>
      </html>
      `);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    return addRequestHandler(req, res);
  }
  res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head>
          <title>Calculator</title>  
        </head>
        <body>
          <h1>404 Page doesn't exist</h1>
          <a href="/">Go to Home</a>
        </body>
      </html>
      `);
    return res.end();
};

exports.requestHandler = requestHandler;
