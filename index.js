const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json())

app.use(cors())

mongoose.connect('mongodb+srv://aparnarajendran:aparna@cluster0.2jjfvoh.mongodb.net/employee?retryWrites=true&w=majority')

app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employess => res.json(employess))
    .catch(err=> res.json(err))

})

app.post('/login',(req,res)=>{
    const {email, password}= req.body;
    EmployeeModel.findOne({email: email})
    .then(user =>{
      if(user){
        if(user.password === password){
            res.json("success")
        }else {
            res.json('The password is incorrect')
        }
      }else{
        res.json("no record exist")
      }
    })
})

app.listen(3001, ()=>{
    console.log("server is running");
    
})
