class Jspang{
    public name:string
    public age : number
    public skill: string
    constructor(name:string,age:number,skill:string){
        this.name = name
        this.age = age
        this.skill = skill
    }
    public interest(){
        console.log('找小姐姐')
    }
}
let jspangObj:Jspang = new Jspang('技术胖',18,'web')
jspangObj.interest()


class JsShuai extends Jspang{
    public xingxiang:string = '帅气'
    public zhuangQian(){
        console.log('一天赚了一个亿')
    }
    public interest(){
        super.interest()
        console.log('建立电商平台')
    }
}
let shuai = new JsShuai("技术帅",5,'演讲')
shuai.interest()
shuai.zhuangQian()