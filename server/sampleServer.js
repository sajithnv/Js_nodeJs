var http =require('http')
// http.createServer(server).listen(7000)
// function server(req,res){
//     res.write('MY NEW PROJECT')
//     res.end()
// }
http.createServer(function(req,res){
    res.write('HELLO WORLD')
    res.end()
}).listen(7000)