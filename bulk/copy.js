var fs = require('fs');
fs.readFile('./copy.txt', function(err, buf) {
	console.log(buf.toString());
});