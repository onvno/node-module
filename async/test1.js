var async = require('async');

var items = ["1","2","3"];
// 1.我们用setTimeout来模拟异步
// 2.同时为了说明“并行迭代存在异步的情况下，每个元素的迭代完成的时间将无法保证”
// 我们让第一个元素延时300ms执行，第二个延时200ms，第三个延时100ms
async.each(items, function( item, callback) {
    console.log('Processing item : ' + item);
    if(item==="2" ) {
        // 假设在迭代第二个元素我们需要抛出一个错误
        setTimeout(function(){
            console.log('the second item is the bad one!');
            // 向callback传递一个非空实参，可以立刻触发总回调函数的执行
            callback('the second item is the bad one!');
        },100*(4-item));
    } else {
        // 假设其它元素都是正常的
        setTimeout(function(){
            console.log(item + ' is processed!');
            callback();
        },100*(4-item));
    }
}, function(err){
    // err是由迭代器的回调函数传入
    if(err) {
        // 在迭代某个元素是传入了err.
        // 官网的注释说是传入错误的话，后面的迭代将会终止，而事实并未终止，"1 is processed!"依旧被输出了.
        console.log('Failed to process : ' + err);
    }else{
        console.log('All items have been processed successfully');
    }
});