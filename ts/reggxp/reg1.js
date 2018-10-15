"use strict";
var reg1 = new RegExp("jspang"); //表示字符串规则里含有jspang
console.log(reg1);
var reg2 = new RegExp("jspang", 'gi');
console.log(reg2);
var reg3 = /jspang/;
var reg4 = /jspang/gi;
console.log(reg3);
console.log(reg4);
