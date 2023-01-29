const mongoose = require('mongoose')

const CalculateSchema = new mongoose.Schema({
    annualInstalment:{type:Number},
    annualInterest:{type:Number},
    years:{type:Number}
})

const CalculateModel = mongoose.model('calculate',CalculateSchema)
module.exports = CalculateModel;