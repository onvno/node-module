var fs = require('fs');
fs.createReadStream('cont/vue.html').pipe(process.stdout)
