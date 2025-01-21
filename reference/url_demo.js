const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// serialize URL
console.log(myUrl.href);

//host 
console.log(myUrl.host);

//hostname
console.log(myUrl.hostname);

// pathname 
console.log(myUrl.pathname);

//serialize query
console.log(myUrl.search);

//params object
console.log(myUrl.searchParams);

// add param 

myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);