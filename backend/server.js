const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors')
const Patient = require('./models/patientSchema')
const mongoose = require('mongoose')

dotenv.config();
const port = process.env.port || '4001';

mongoose.connect(process.env.Database_access ,console.log("mongodb connected"))


app.use(cors());
app.use(express.json())



app.get('/',(req,res)=>{
    res.send("hi i am here")
})

app.get('/patientdata',async(req,res)=>{
    const result= await Patient.find()
    res.send(result)
})

app.post('/patiententry',(req,res)=>{
  const {    Name,
    PhoneNum,
    Age,
Blood,
Height,
Weight,
Doctor,
Condition} = req.body;


    const patient = new Patient ({
        Name,
        PhoneNum,
        Age,
    Blood,
    Height,
    Weight,
    Doctor,
    Condition,
    })

    patient.save().then(()=>{
        res.json({status:200,data:"recieved"})
    }).catch((err)=>{
        console.log(err)
    })
})

app.listen(port,()=>{console.log("process started at port" + port)})