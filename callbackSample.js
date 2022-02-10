var oldDate= new Date
for(var i=1;i<101;i++){
    console.log("loop : "+i)
}
var diff = new Date - oldDate
console.log(diff)

// time difference
function longTask(milliSec){
    var oldTime = new Date
    while((new Date-oldTime)<=milliSec){
        
    }
}
// synchronous
console.log("started...1")
longTask(2000)
console.log('Ended..1')

console.log("started...2")
longTask(2000)
console.log('Ended..2')

console.log("started...3")
longTask(2000)
console.log('Ended..3')

// asyncronous
function end(){
    console.log('Ended')
}
console.log("started...1")
setTimeout(end,2000)

console.log("started...2")
setTimeout(end,2000)

console.log("started...3")
setTimeout(end,2000)

//callback
var hey=(data)=>{
    console.log('data : '+data)
}
var hello=(arg)=>{
    arg('MyData')
}
hello(hey)