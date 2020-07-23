// run node server.js in terminal and BOOM!
console.log("Is this my first node project? ☝🏻");

// all requires will always go in the beginning of the file!

// how to get package in this file (require)...
const myHttp = require("http");
require("dotenv").config();

// how to create server (and use packages):

const myServer = myHttp.createServer((request, response) => {
  console.log(`Requested URL is: ${request.url}`);
  if (request.url === "/") {
    response.write("You requested localhost:3000 my friend!");
    response.end();
  } else if (request.url === "/ptwd2020") {
    response.write(`
      Cristina
      Pedro
      Raquel
      Alejandro
      `);
    response.end();
  } else {
    response.write(
      `You are trying to access the page that does not exist! Error: 404`
    );
    response.end();
  }
});

// myServer.listen(3000, () => console.log('I am 🏃‍♂️ on port 3000!'));

myServer.listen(process.env.PORT, () => console.log("I am 🏃‍♂️ on port 3000!"));
