const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// The above code lacks proper error handling. If there is an error during server creation or listening, the server will crash without providing any useful information.  This is especially critical in production environments.