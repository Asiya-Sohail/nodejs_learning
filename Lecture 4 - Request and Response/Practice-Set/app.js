const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  
  if (req.url === '/home') {
    res.write(`
    <html>
    <head>
      <title>Home</title>
    </head>
    <body>
      <h1>Welcome to Home Page</h1>
    </body>
    </html>
    `)
    return res.end()
  } else if (req.url === '/men') {
    res.write(`
    <html>
    <head>
      <title>Men</title>
    </head>
    <body>
      <h1>Welcome to Men Page</h1>
    </body>
    </html>
    `)
    return res.end()
  } else if (req.url === '/women') {
    res.write(`
    <html>
    <head>
      <title>Women</title>
    </head>
    <body>
      <h1>Welcome to Women Page</h1>
    </body>
    </html>
    `)
    return res.end()
  } else if (req.url === '/kids') {
    res.write(`
    <html>
    <head>
      <title>Kids</title>
    </head>
    <body>
      <h1>Welcome to Kids Page</h1>
    </body>
    </html>
    `)
    return res.end()
  } else if (req.url === '/cart') {
    res.write(`
    <html>
    <head>
      <title>Cart</title>
    </head>
    <body>
      <h1>Welcome to Cart Page</h1>
    </body>
    </html>
    `)
    return res.end()
  }


  res.write(`
    <html>
    <head>
      <title>Myntra</title>
    </head>
    <body>
      <header>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/men">Men</a></li>
          <li><a href="/women">Women</a></li>
          <li><a href="/kids">Kids</a></li>
          <li><a href="/cart">Cart</a></li>
        </ul>
      </header>
    </body>
    </html>
    `)
    res.end();

});

const PORT = 3000
server.listen(PORT, () => {
  console.log(`Sever Listening on address http://localhost:${PORT}`)
})