function searchXiaoJieJie(age: number): string {
    return '找到' + age + '的小姐姐'
}
var age: number = 18;
var result:string  =  searchXiaoJieJie(age)
console.log(result)

//1.有可选参数的函数
function searchXiaoJieJie2(age: number, stature?: string): string {
    let yy: string = ''
    yy = '找到了' + age + '岁'
    if (stature != undefined) {
        yy = yy + stature
    }
    return yy + '的小姐姐'
}
var result2: string = searchXiaoJieJie2(22, '大长腿')
console.log(result2)

//2.有默认参数的函数
function searchXiaoJieJie3(age:number=18,stature:string='大胸'):string{
    let yy:string = ''
    yy = '找到了'+age+'岁'
    if(stature !=undefined){
        yy = yy + stature
    }
    return yy+'的小姐姐'
}
var result3:string  =  searchXiaoJieJie3()
console.log(result3)

//3.有剩余参数的函数
function searchXiaoJieJie4(...xuqiu:string[]):string{
    let  yy:string = '找到了'
    for (let i =0;i<xuqiu.length;i++){
        yy = yy + xuqiu[i]
        if(i<xuqiu.length){
            yy=yy+'、'
        }
    }
    yy=yy+'的小姐姐'
    return yy
}
var result4:string  =  searchXiaoJieJie4('22岁','大长腿','瓜子脸','水蛇腰')
console.log(result4)