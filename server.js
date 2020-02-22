const http = require('http');

function requestListener(req, res) {
  const body = 'hello world';
  res.writeHead(
    200,
    {
      'Content-Length': Buffer.byteLength(body),
      'Content-Type': 'text/plain'
    }
  );
  res.end(body);
}

http.createServer(requestListener).listen(3000);
