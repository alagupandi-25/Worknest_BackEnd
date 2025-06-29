"use strict";

const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    user : {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    employeeId : { 
        type: Number,
        required: true,
        unique: true
    },
    department:   { 
        type: Schema.Types.ObjectId, 
        ref: 'Department', 
        required: true
    },
    phone: {
        type: String,
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v); 
            },
            message: props => 'Phone number is not a valid 10-digit phone number!'
        },
        required: [true, 'Phone number is required']
    },
    designation : { 
        type: String
    },
    joiningDate : { 
        type: Date, 
        required: true
    },
    status: { 
        type: String, 
        enum: ['active', 'inactive', 'terminated'],
        default: 'active' 
    },
    leaveDate : { 
        type: Date, 
        required: true
    },
    gender : {
        type: String, 
        enum: ['male', 'female', 'other'] 
    }
});

const Employee = new mongoose.model("Employee",employeeSchema);

module.exports = Employee;

