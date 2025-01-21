const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// serialize URL
console.log(myUrl.href);

//host 
console.log(myUrl.host);

//hostname
console.log(myUrl.hostname);