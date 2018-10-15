// 声明数组的方法
let arr1: number[]     //声明一个数值类型的数组
let arr2: Array<string>  //声明一个字符串类型的数组


// 字面量赋值法
//定义一个空数组，数组容量为0
let arr3: number[] = []
//定义一个数组时，直接给数组赋值
let arr4: number[] = [1, 2, 3, 4, 5]
//定义数组 的同时给数组赋值
let arr5: Array<string> = ['jspang', '技术胖', '金三胖']
let arr6: Array<boolean> = [true, false, false]

//在TypeScript中指定数据类型的数组只能存储同一类型的数组元素。
// 构造函数赋值法
let arr7: number[] = new Array()
let ara8: number[] = new Array(1, 2, 3, 4, 5)
let arr9: Array<string> = new Array('jspang', '技术胖', '金三胖')
let arr10: Array<boolean> = new Array(true, false, false)

//元祖是一种特殊的数组，元祖类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
//声明一个元祖类型
let x : [string,number]
//正确的初始化
x = ['hello',10]
//错误的初始化方法
// x = [10,'hello']