const fs = require("fs");
const path = require("path");

// create folder 

// fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//     if(err) throw err;
//     console.log("Folder Created...");
// });

// create file and write 
fs.writeFile(path.join(__dirname, "/test", "Hello.txt"), "Hello Mr. Humayan", err => {
    if(err) throw err;
    console.log("File written...");
});