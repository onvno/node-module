var fs = require('fs');
var join = require('path').join;

var copy = function(src, dst) {
	fs.readdir(src, function(err, paths) {
		if(err) {
			console.log(err);
		}

		paths.forEach(function(path) {
			var _src = join(src, path);
			var _dst = join(dst, path);
			var readable,writable;

			fs.stat(_src, function(err, st) {
				if(err) console.log(err);
				if(st.isFile()) {
					readable = fs.createReadStream(_src);
					writable = fs.createWriteStream(_dst);
					readable.pipe(writable);
				}

				if(st.isDirectory()) {
					exists(_src, _dst, copy);
				}
			})
		})
	})
}

var exists = function(src, dst) {
	fs.exists(dst, function(exists) {
		if(exists) {
			copy(src,dst);
		} else {
			fs.mkdir(dst, function() {
				copy(src, dst);
			})
		}
	})
}

exports.copyfile = exists;