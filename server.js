const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('🌟 Hello from my own app inside Kubernetes! 🌟');
});
server.listen(port, '0.0.0.0' , () => {
  console.log(`Server running on port ${port}`);
});
