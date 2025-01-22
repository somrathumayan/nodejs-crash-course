const person = require("./person");

// console.log(person);

const per = new person("Md. Humayan Kabir", 27);

per.greetings();


const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(content);
        })

    }

    if(req.url === '/about'){
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(content);
        })

    }

    if(req.url === '/api/users'){
        const users = [
            {name: "Md. Humayan Kabir", age: 28},
            {name: "Mst. Rabeya Akhter", age: 25}
        ];
        
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(JSON.stringify(users));
        

    }

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));