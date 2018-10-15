"use strict";
function searchXiaoJieJie(age) {
    return '找到' + age + '的小姐姐';
}
var age = 18;
var result = searchXiaoJieJie(age);
console.log(result);
//1.有可选参数的函数
function searchXiaoJieJie2(age, stature) {
    var yy = '';
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy + '的小姐姐';
}
var result2 = searchXiaoJieJie2(22, '大长腿');
console.log(result2);
//2.有默认参数的函数
function searchXiaoJieJie3(age, stature) {
    if (age === void 0) { age = 18; }
    if (stature === void 0) { stature = '大胸'; }
    var yy = '';
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy + '的小姐姐';
}
var result3 = searchXiaoJieJie3();
console.log(result3);
//3.有剩余参数的函数
function searchXiaoJieJie4() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var yy = '找到了';
    for (var i = 0; i < xuqiu.length; i++) {
        yy = yy + xuqiu[i];
        if (i < xuqiu.length) {
            yy = yy + '、';
        }
    }
    yy = yy + '的小姐姐';
    return yy;
}
var result4 = searchXiaoJieJie4('22岁', '大长腿', '瓜子脸', '水蛇腰');
console.log(result4);
