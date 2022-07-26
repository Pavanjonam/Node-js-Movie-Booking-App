//core imports
const http = require("http");
//local imports
const app = require("./app");

//constants
const PORT = process.env.PORT || 8085;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`🚀 server listening on port ${PORT}`);
});
