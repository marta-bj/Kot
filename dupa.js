const http = require('http');
const port = process.env.PORT || 6969;


const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Tomasz jest super!');
}

const server = http.createServer(requestListener);
server.listen(port);
console.log('server is running');