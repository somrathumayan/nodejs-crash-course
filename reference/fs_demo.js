const fs = require("fs");
const path = require("path");

// create folder 

// fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//     if(err) throw err;
//     console.log("Folder Created...");
// });

// create file and write 
// fs.writeFile(path.join(__dirname, "/test", "Hello.txt"), "Hello Mr. Humayan", err => {
//     if(err) throw err;
//     console.log("File written...");

//     fs.appendFile(path.join(__dirname, "/test", "Hello.txt"), " I love node js", err => {
//         if(err) throw err;
//         console.log("File written...");
//     });
// });

// Read File 
// fs.readFile(path.join(__dirname, "/test", "Hello.txt"), "utf8", (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// File rename 
fs.rename(path.join(__dirname, "/test", "Hello.txt"), path.join(__dirname, "/test", "Helloworld.txt"),
 (err) => {
    if(err) throw err;
    console.log("file renamed");
});