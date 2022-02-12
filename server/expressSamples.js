const express = require('express')
const path = require('path')
const app = express()

app.use(function(req,res,next){
    console.log('start')
    next() //  enter to other stmnts
})

app.get('/',function(req,res,next){
    res.send('HOME_PAGE')
    console.log('middle')
    next()
})

app.use(function(req,res,next){
    console.log('end')
    next()
})

app.get('/signup',function(req,res){
    //res.send('ABOUT_PAGE')
    res.sendFile(path.join(__dirname,'signup.html'))
})

app.post('/signupaction',(req,res)=>res.send('SIGNUP_ACTION_POST'))

app.get('/signupaction',(req,res)=>res.send('SIGNUP_ACTION_GET'))


app.listen(3000,()=>console.log('Server Started..')) 