const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    Name:String,
    PhoneNum:Number,
    Doctor:String,
    Condition:String
  })
  
  const Patient = mongoose.model('patient',patientSchema);
  
  module.exports = Patient;