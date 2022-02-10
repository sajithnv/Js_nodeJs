class helloWorld{
    wish1(){
        console.log("sample wish1")
    }
}
class helloWorld2 extends helloWorld{
    wish2(){
        console.log("sample wish2 ")
    }
}
let x =new helloWorld2()
x.wish2()
x.wish1()