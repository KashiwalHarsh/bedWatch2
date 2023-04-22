const mongoose = require('mongoose')

const QrSchema= new mongoose.Schema({
    BedId:String,
    Marked:Number
})
  
const Qrcode = mongoose.model('qrcode',QrSchema);  
  module.exports = Qrcode;
