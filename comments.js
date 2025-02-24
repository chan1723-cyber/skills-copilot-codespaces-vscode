// Create web server
// Create a web server that listens on port 3000. When you access the server using a web browser, the server will return a response with a status code of 200 and a message that says "Hello, World!".

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(3000, 'localhost', () => {
  console.log('Server is running on http://localhost:3000/');
});