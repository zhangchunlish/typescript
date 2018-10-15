let reg1:RegExp = new RegExp("jspang")  //表示字符串规则里含有jspang
console.log(reg1)
let reg2:RegExp = new RegExp("jspang",'gi')
console.log(reg2)

let reg3:RegExp = /jspang/
let reg4:RegExp = /jspang/gi
console.log(reg3)
console.log(reg4)