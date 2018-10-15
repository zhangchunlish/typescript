"use strict";
// 基本类型字符串：由单引号或者双引号括起来的一串字符串。
// 引用类型字符串：用new 实例化的 String类型。
var jspang1 = '技术胖';
var jspanga = new String("jspang.com");
console.log(jspang1);
console.log(jspanga);
console.log(jspang1.length);
console.log(jspanga.length);
var something = "清早起来打开窗，心情美美的，我要出去找小姐姐，心情美美的。";
var xiaoJieJie = "小姐姐";
console.log(something.indexOf(xiaoJieJie)); //19
var something2 = "清早起来打开窗，心情美美的，我要出去找小姐姐，心情美美的。";
var xiaoJieJie2 = "小姐姐";
console.log(something2.lastIndexOf(xiaoJieJie2)); //19
