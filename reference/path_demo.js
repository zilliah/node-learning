const path = require("path");

// base file name
console.log(path.basename(__filename));

//directory name
console.log(path.dirname(__filename));

console.log(__dirname);

// extension
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename).base);

// concatonatre paths
// creating  ../test/hello.html
console.log(path.join(__dirname, "test", "hello.html"));

