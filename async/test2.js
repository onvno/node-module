var async = require('async');

var items = ["1","2","3"];
async.eachSeries(items, function( item, callback) {
    console.log('Processing item : ' + item);
    setTimeout(function(){

            console.log(item + ' is processed!');
            callback();

    },100*(4-item));
}, function(err){
    if(err) {
        // 第二个元素抛出了err.整个迭代也被终止了
        console.log('Failed to process : ' + err);
    }else{
        console.log('All items have been processed successfully');
    }
});