// positional argument
function display2(b,a){
    console.log(a,b)
}
display2(30,20)
//keyword argument
function display(a,b){
    console.log(a,b)
}
display(b=20,a=30)
// default argument
function display(b,a=100){
    console.log(a,b)
}
display(30)
function display1(a=100,b){
    console.log(a,b)
}
display1(undefined,30)
//variable length argument
function display3(...x){
    console.log(x)
}
display3(30,20,60)