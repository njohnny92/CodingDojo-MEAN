const http = require('http');
const fs = require('fs');
//this line is crucial! it creates our webserver!
const server = http.createServer((request, response) => {

    //this is how we do our routing to a root.
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/dojo.html") {
         fs.readFile('dojo.html', 'utf8', (errors, contents) => {
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
    //request didn't find anything that matches the file root.
    else {
        response.end('File not found!!!');
    }
});
server.listen(6789);
console.log("listening on port 6789");
