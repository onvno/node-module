var http = require('http');
var fs = require('fs');

/**
 * bad method
 * @param  {[type]} req  [description]
 * @param  {[type]} res) {	fs.readFile(__dirname + '/cont/vue.html', function(err, data) {		if(err) {			res.statusCode [description]
 * @return {[type]}      [description]
 */
/*var server = http.createServer(function(req, res) {
	fs.readFile(__dirname + '/cont/vue.html', function(err, data) {
		if(err) {
			res.statusCode = 500;
			res.end(String(err));
		} else {
			res.end(data);
		}
	});
});*/

/**
 * good way
 * @param  {[type]} req  [description]
 * @param  {[type]} res) {	var        stream [description]
 * @return {[type]}      [description]
 */
/*var server = http.createServer(function(req, res) {
	var stream = fs.createReadStream(__dirname + '/cont/vue.html');
	stream.pipe(res);
})

server.listen(8000);
console.log('正在打开http://localhost:8000/')*/

/**
 * static page gzip
 */
var http = require('http');
var fs = require('fs');
var zlib = require('zlib');
var server = http.createServer(function(req, res) {
	res.writeHead(200, {'content-encoding': 'gzip'});
	var stream = fs.createReadStream(__dirname + '/cont/vue.html');
	stream.pipe(zlib.createGzip()).pipe(res);
});

server.listen(8000);
console.log('正在打开http://localhost:8000/')