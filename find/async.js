var asyncjs = require('asyncjs');

asyncjs.readdir('./')
	.stat()
	.filter(function(file) {
		return console.log(file.stat);
		// if(file.stat == searchFile){
		// 	return console.log(file.stat);
		// }
	});




