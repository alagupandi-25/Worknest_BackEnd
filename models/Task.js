"use strict";

const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "Project name is required"],
        trim : true,
    },
    description : {
        type : String,
        trim : true,
    }, 
    project : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Project',
    },
    members : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Employee',
        }
    ],
    status : {
        type : String,
        enum : ['planned','active','on-hold','completed','cancelled'],
        default : 'planned',
    },
    notes : {
        type: String,
        trim : true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
});

const Task = mongoose.model('Task',TaskSchema);

module.exports = Task;