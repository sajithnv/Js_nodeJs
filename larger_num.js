var r=require('readline-sync')

var a=r.question("Enter 2 Numbers : \n")
var b=r.question()
console.log("a : "+a+" b : "+b+"\n"+res(a,b))
function res(a,b){
    // return a>b ? "a is greater,a = "+a : b>a ? "b is greater,b = "+b : "a and b are equal "+a+" = "+b
    if(a===b){
        return "a and b are equal "+a+" = "+b
    }
    else if(a>b){
        return "a is greater "+a
    }else{
        return "b is greater "+b
    }
}
