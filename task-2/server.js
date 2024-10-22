// node server
import http from "http";

let message = '<h1>Hello Node!!!!</h1>\n'

const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status code 200 (OK)
  res.setHeader("Content-Type", "text/html"); // Set the content type to HTML
  res.end(message); // Send response
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})