const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors')
const Patient = require('./models/patientSchema')
const mongoose = require('mongoose')
const Qrcode = require('./models/QrSchema');

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

app.get('/getPatient/:id',async(req,res)=>{
        const id = req.params.id;
        try {
            const result = await Patient.findOne({_id:id});
            res.json({result,status:200})
        } catch (error) {
                console.log(error)
        }
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

app.get('/getBed',async(req,res)=>{

    const result= await Qrcode.find();
    var freebeds=0;
        var totalbeds=0;
        result.forEach(function(data){
            totalbeds++;
            if(data.Marked===0){
                freebeds++;
            }
        })
        console.log({freebeds,totalbeds});
        res.json({status:200,freebeds,totalbeds})
})

app.get('/ocupiedBed/:id',async(req,res)=>{
        const update = await Qrcode.findOneAndUpdate({BedId:req.params.id},{$set:{Marked:1}},{new:true})
        console.log(update);
        res.json({status:200});

})
app.get('/unocupiedBed/:id',async(req,res)=>{
        const update = await Qrcode.findOneAndUpdate({BedId:req.params.id},{$set:{Marked:0}},{new:true})
        console.log(update);
        res.json({status:200});

})

app.listen(port,()=>{console.log("process started at port" + port)})