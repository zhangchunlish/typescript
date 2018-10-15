// 基本类型字符串：由单引号或者双引号括起来的一串字符串。
// 引用类型字符串：用new 实例化的 String类型。
let jspang1:string = '技术胖'
let jspanga:String = new String("jspang.com")
console.log(jspang1)
console.log(jspanga)
console.log(jspang1.length)
console.log(jspanga.length)

let something:string = "清早起来打开窗，心情美美的，我要出去找小姐姐，心情美美的。"
let xiaoJieJie:string = "小姐姐"
console.log(something.indexOf(xiaoJieJie))   //19

let something2:string = "清早起来打开窗，心情美美的，我要出去找小姐姐，心情美美的。"
let xiaoJieJie2:string = "小姐姐"
console.log(something2.lastIndexOf(xiaoJieJie2)) //19