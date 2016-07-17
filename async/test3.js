var async = require('async');
var $ = require('jquery');

// 6个拉屎的人
var items = ["1.李世民","2.长孙无忌","3.房玄龄","4.李靖","5.岑文本","6.侯君集"];
// 只有4个坑
async.eachLimit(items, 4,function( item, callback) {
    console.log(item.substring(2) + " 开始占坑……");
    $.post("../json/" + item.substring(0,1) + ".json", {}, function(resp){
        var action = resp.action;
        var name = resp.name;
        // 房玄龄没带纸
        if(action=="没带纸"){
            console.log(name + ' 没带纸!!!!!!!!!!!!!');
            // 呼叫厕所收费的老头
            callback(name + ' !!!!!!!!!!!!!');
        }else{
            console.log(name + ' 拉完了!');
            callback();
        }
    });
}, function(err){
    if(err) {
        console.log('厕所里面发生大事了 : ' + err);
    }else{
        console.log('每个人都顺利滴拉完了屎……');
    }
});
