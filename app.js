// app.js
const http = require('http');

// Define the port number
const PORT = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World from Node.js Server , This is sadhix institute \n');
});

// Start the server
server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}/`);
});
