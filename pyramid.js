var r=require('readline-sync')
var a=r.question("Enter a no of rows: ")
var str=''
for(var i=1;i<=a;i++){
    for(var j=1;j<=i;j++){
        str+='*'
    }
    console.log(str)
    str=''
}
