var http = require('http');  
var uc = require('uppercase'); 
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc("hello world!")); 
    res.end();
}).listen(5000); 


var up = require('uppercase') 
console.log(uc.uppercase("Hi Guys"));