"use strict";
// 声明数组的方法
var arr1; //声明一个数值类型的数组
var arr2; //声明一个字符串类型的数组
// 字面量赋值法
//定义一个空数组，数组容量为0
var arr3 = [];
//定义一个数组时，直接给数组赋值
var arr4 = [1, 2, 3, 4, 5];
//定义数组 的同时给数组赋值
var arr5 = ['jspang', '技术胖', '金三胖'];
var arr6 = [true, false, false];
//在TypeScript中指定数据类型的数组只能存储同一类型的数组元素。
// 构造函数赋值法
var arr7 = new Array();
var ara8 = new Array(1, 2, 3, 4, 5);
var arr9 = new Array('jspang', '技术胖', '金三胖');
var arr10 = new Array(true, false, false);
//元祖是一种特殊的数组，元祖类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
//声明一个元祖类型
var x;
//正确的初始化
x = ['hello', 10];
//错误的初始化方法
// x = [10,'hello']
