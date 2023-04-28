const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    Name:String,
    PhoneNum:Number,
    Age:Number,
    Blood:String,
    Height:Number,
    Weight:Number,
    Doctor:String,
    Condition:String

  })
  
  const Patient = mongoose.model('patient',patientSchema);
  
  module.exports = Patient;