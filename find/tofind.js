// sync finder
// var finder = require('./finder');
// try {
// 	var results = finder.findSync(/vue.*/, './');
// 	console.log(results);
// } catch (err) {
// 	console.error(err);
// }

// async finder
var finder = require('./finderAsync');
try {
	var results = finder.find(/vue.*/, './');
	console.log(results);
} catch (err) {
	console.error(err);
}