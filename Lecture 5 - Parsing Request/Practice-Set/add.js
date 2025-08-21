const addRequestHandler = (req, res) => {
    const body = [];
    req.on("data", chunk => body.push(chunk));

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(parsedBody);
      const bodyObject = Object.fromEntries(params);
      // for (const [key , val] of params.entries()){
      //   bodyObject[key] = value
      // }
      const result = Number(bodyObject.Number_1) + Number(bodyObject.Number_2);
      console.log(result);
      res.setHeader("Content-Type", "text/html");
      res.write(`
      <body>
        <h1>Your Reults</h1>
        <p><strong>The sum of ${bodyObject.Number_1} and ${bodyObject.Number_2} </strong> : ${result}</p>
      </body>
      `);
      return res.end();
    });
}

exports.addRequestHandler = addRequestHandler;