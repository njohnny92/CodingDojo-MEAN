const http = require('http');
const fs = require('fs');
//this line is crucial! it creates our webserver!
const server = http.createServer(function(request, response) {
    console.log('client request URL: ', request.url);

    //this is how we do our routing to a root.
    if(request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cats") {
         fs.readFile('views/cats.html', 'utf8', function(errors, contents) {
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }

    else if (request.url === "/cars") {
         fs.readFile('views/cars.html', 'utf8', function(errors, contents) {
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }

    else if (request.url === "/cars/new") {
         fs.readFile('views/add.html', 'utf8', function(errors, contents) {
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
    //Car images
    else if (request.url === "/images/subaru.jpg") {
        fs.readFile('images/subaru.jpg', function(errors, contents) {
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/images/tesla.jpg") {
        fs.readFile('images/tesla.jpg', function(errors, contents) {
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/images/ae86.jpg") {
        fs.readFile('images/ae86.jpg', function(errors, contents) {
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents);
             response.end();
         });
    }

    //cat images
    else if (request.url === "/images/omg.jpg") {
        fs.readFile('images/omg.jpg', function(errors, contents) {
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/images/eyes.jpg") {
        fs.readFile('images/eyes.jpg', function(errors, contents) {
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/images/shrek.jpg") {
         fs.readFile('images/shrek.jpg', function(errors, contents) {
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents);
             response.end();
         });
    }

    //request didn't find anything that matches the file root.
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
server.listen(6789);
console.log("listening on port 6789");
