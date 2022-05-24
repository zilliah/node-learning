const url = require("url");

const myUrl = new URL("http://wmywebsite.com:8000/hello.html?id=100&status=active");

//serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

//host (root domain)
console.log(myUrl.host);
//gets port

//host name
console.log(myUrl.hostname);
//note does NOT get port

//pathname
console.log(myUrl.pathname);

//serialised query
//ie query params
console.log(myUrl.search);

//params object
console.log(myUrl.searchParams);

// add param
myUrl.searchParams.append("asc", "123");
console.log(myUrl.searchParams);
