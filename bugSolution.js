const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

// Handle potential errors during server creation or listening
server.on('error', (err) => {
  console.error('Server error:', err);
  // Gracefully shut down the server
  process.exit(1);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});