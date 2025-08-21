const addRequestHandler = (req, res) => {
    const body = [];
    let result;
    console.log("1. In Add Request Handler ", req.url);
    req.on("data", (chunk) => {
      body.push(chunk);
      console.log("2. Chunk Came");
      
    });
// The sequence doesn't actually matter, when the request will come then only particular code will run
    req.on("end", () => {
      console.log("3. End Event Came");
      const parsedBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(parsedBody);
      const bodyObject = Object.fromEntries(params);
      // for (const [key , val] of params.entries()){
      //   bodyObject[key] = value
      // }
      result = Number(bodyObject.Number_1) + Number(bodyObject.Number_2);
      console.log(result);
    });
      console.log("4. Sending the Reponse");
    // If we do set header below , there will be sync problem
      res.setHeader("Content-Type", "text/html");
      res.write(`
      <body>
        <h1>Your Reults</h1>
        <p><strong>The sum </strong> : ${result}</p>
      </body>
      `);
      return res.end();
}

exports.addRequestHandler = addRequestHandler;