const mongoose = require('mongoose');

const deparmentSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true, 
        unique : true,
        trim : true
    },
    description : {
        type : String
    },
    head : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Employee"
    }
}) 

const deparment = mongoose.model("Deparment",deparmentSchema);

module.exports = deparment;