//函数声明法
function add(n1:number,n2:number):number{
    return n1+n2
}
//函数表达式法
var add2 = function(n1:number,n2:number):number{
    return n1+n2
}
console.log(add2(1,4))

//箭头函数
var add3 = (n1:number,n2:number):number=>{
    return n1+n2
}
console.log(add3(1,4))