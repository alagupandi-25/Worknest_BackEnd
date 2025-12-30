"use strict";

const mongoose = require('mongoose');
const validator = require("../utils/validator");

const employeeSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Employee must be existing user"]
    },
    employeeId : { 
        type: Number,
        required: [true, "Employee id is required"],
        unique: true
    },
    department:   { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Department', 
    },
    phone: {
        type: String,
        validate: {
            validator: validator.phoneValidator,
            message: (props) => 'Phone number is not a valid 10-digit phone number!'
        },
        required: [true, 'Phone number is required']
    },
    designation : { 
        type: String
    },
    joiningDate : { 
        type: Date, 
        required: [true , "Joining Date is required"]
    },
    status: { 
        type: String, 
        enum: ['active', 'inactive', 'terminated'],
        default: 'active' 
    },
    leaveDate : { 
        type: Date
    },
    gender : {
        type: String, 
        enum: ['male', 'female', 'other'] 
    }
});

const Employee = new mongoose.model("Employee",employeeSchema);

module.exports = Employee;

