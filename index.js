const exp=require('express')
const app=exp()
const port =5000
var bodyParser = require('body-parser')
const formData = require("express-form-data");

// app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(formData.parse());

app.get('/',(req,res)=>{

    console.log('first api get api')
    res.send({msg:'hello world'})

})
app.post('/',(req,res)=>{
    console.log("this is post")
    console.log(req.files)
    res.send(req.body)
})
app.listen(port,()=>{
    console.log('hello node listen port ',port)
})

console.log('hello node js')
