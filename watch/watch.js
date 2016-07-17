var fs = require('fs');
fs.watch('./', function(event,filename) {
	console.log('event is:' + event); // 监视的类型：'rename','change' 
	if(filename) {
		console.log('filename provided:' + filename);
	} else {
		console.log('filename not provided');
	}
})