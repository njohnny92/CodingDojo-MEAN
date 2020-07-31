const http = require('http');
const fs = require('fs')

const server = http.createServer(function (request, response) {
    console.log('client request URL: ', request.url);

    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url ==='/kittens') {
        fs.readFile('kittens.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contenets);
            response.end();
        });
    }
    else {
        response.writeHead(404);
        response.end('File not found');
    }
});

server.listen(6789);
console.log('Running in localhost port 6789!');