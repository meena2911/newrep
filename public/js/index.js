var http=require('http');
port=8080,
host="127.0.0.1";

var server=http.createServer=http.createServer(function(req,res)){
  res.writeHead(200,{"Content-Type":"plain/text"})
  res.write("Hello world");
  res.end();
});
server.listen(port,host,)
}
