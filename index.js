const http = require("http");
const path = require("path");
const fs = require("fs");

//example with hardcoded filepath
// const server = http.createServer((req, res) => {
//     console.log(req.url);

//     if(req.url === "/") {
//         //know it's the index page
//         fs.readFile(path.join(__dirname, "public", "index.html"), (err, content) => {

//             if (err) throw err;
//             //write to header
//             res.writeHead(200, { "Content-Type": "text-html"});
//             res.end(content);
//             //need to resetart the server to see any changes
//             //unless using nodemon
//         });
//     }
//     if(req.url === "/about") {
//         //know it's the index page
//         fs.readFile(path.join(__dirname, "public", "about.html"), (err, content) => {

//             if (err) throw err;
//             //write to header
//             res.writeHead(200, { "Content-Type": "text-html"});
//             res.end(content);
//             //need to resetart the server to see any changes
//             //unless using nodemon
//         });
//     }

//     if(req.url === "/api/users") {
//         const users = [
//             { name: "ella", age: 13}, 
//             { name: "rob", age: 6}
//         ];
//         res.writeHead(200, { "Content-Type": "application/json"});
//         res.end(JSON.stringify(users));

//     }

// });

//checks environment variable for a port
//if not found, runs on port 5000

//example with dynamic filepaths
const server = http.createServer((req, res) => {
    //build filepath
    let filePath = path.join(__dirname, "public", req.url === "/" ?
    "index.html" : req.url);

    //extension of the file
    let extName = path.extname(filePath);

    //initial content type
    let contentType = "text/html";

    //check ext and set content type
    switch(extName) {
        case ".js" :
            contentType = "text/javascript";
            break;
        case ".css" :
            contentType = "text/css";
            break;
        case ".json" :
            contentType = "application/json";
            break;
        case ".png" :
            contentType = "image/png";
            break;
        case ".jpg" :
            contentType = "image/jpg";
            break;
    }

    //read file
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if (err.code === "ENOENT") {
                //page not found
                fs.readFile(path.join(__dirname, "public", "404.html"), 
                (err, content => {
                    res.writeHead(200, { "Content-Type": "text/html"});
                    res.end(content, "utf8");
                }));
            } else {
                //some server error
                res.writeHead(500);
                res.end(`server error: ${err.code}`);
            }
        } else {
            // successful response
            res.writeHead(200, { "Content-Type": contentType});
            res.end(content, "utf8");
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
