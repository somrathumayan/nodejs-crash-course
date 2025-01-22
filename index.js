const person = require("./person");

// console.log(person);

const per = new person("Md. Humayan Kabir", 27);

per.greetings();


const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end("<h1>Home</h1>")
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));