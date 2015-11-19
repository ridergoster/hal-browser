var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

// Serve up public/ftp folder
var serve = serveStatic('./', {'index': ['browser.html']})
console.log(serve);
// Create server
var server = http.createServer(function(req, res){
  var done = finalhandler(req, res)
  serve(req, res, done)
})

// Listen
server.listen(3000, function () {

  var port = server.address().port;
  console.log('HAL Browser listening at port %s', port);

});
